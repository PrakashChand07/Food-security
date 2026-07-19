import React, { useEffect, useState } from "react";
import Card from "../components/ui/Card";
import {
  UsersIcon,
  UserPlusIcon,
  MegaphoneIcon,
  BuildingLibraryIcon,
  ArchiveBoxIcon,
  CalendarDaysIcon,
} from "@heroicons/react/24/outline";
import { api } from "../services/api";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Dashboard() {
  const [stats, setStats] = useState({
    users: 0,
    bookings: 0,
    nominations: 0,
    partners: 0,
    speakRequests: 0,
    subscriptions: 0,
    pastEditionRequests: 0,
    exhibitSponsors: 0,
  });

  const [bookingsChart, setBookingsChart] = useState([]);

  // Dashboard items to show in cards
  const items = [
    // {
    //   label: "Dashboard",
    //   value: stats.users,
    //   icon: <HomeIcon className="w-7 h-7 text-white" />,
    //   color: "from-indigo-500 to-indigo-400",
    // },
    {
      label: "Subscribe",
      value: stats.subscriptions,
      icon: <UserPlusIcon className="w-7 h-7 text-white" />,
      color: "from-green-400 to-green-300",
    },
    {
      label: "Speak",
      value: stats.speakRequests,
      icon: <MegaphoneIcon className="w-7 h-7 text-white" />,
      color: "from-yellow-400 to-yellow-300",
    },
    {
      label: "Nominate",
      value: stats.nominations,
      icon: <UsersIcon className="w-7 h-7 text-white" />,
      color: "from-blue-400 to-blue-300",
    },
    {
      label: "Partner",
      value: stats.partners,
      icon: <UsersIcon className="w-7 h-7 text-white" />,
      color: "from-purple-400 to-purple-300",
    },
    {
      label: "Exhibit/Sponsor",
      value: stats.exhibitSponsors,
      icon: <BuildingLibraryIcon className="w-7 h-7 text-white" />,
      color: "from-pink-400 to-pink-300",
    },
    {
      label: "Past Edition",
      value: stats.pastEditionRequests,
      icon: <ArchiveBoxIcon className="w-7 h-7 text-white" />,
      color: "from-teal-400 to-teal-300",
    },
    {
      label: "Registrations",
      value: stats.bookings,
      icon: <CalendarDaysIcon className="w-7 h-7 text-white" />,
      color: "from-orange-400 to-orange-300",
    },
  ];

  useEffect(() => {
    fetchStats();
    fetchBookingsChart();
  }, []);

  async function fetchStats() {
    try {
      const promises = [
        api.get("/users"),
        api.get("/booking"),
        api.get("/nominate"),
        api.get("/partner"),
        api.get("/speak"),
        api.get("/subscribe"),
        api.get("/past-edition"),
        api.get("/exhibit-sponsor"),
      ];

      // Use allSettled so one failing endpoint (e.g. /users requires auth)
      // does not prevent other counts from being displayed.
      const results = await Promise.allSettled(promises);

      const getLen = (r) => {
        if (r.status !== "fulfilled") return 0;
        const res = r.value.data || {};
        return res.pagination?.total ?? (res.data?.length || 0);
      };

      setStats({
        users: getLen(results[0]),
        bookings: getLen(results[1]),
        nominations: getLen(results[2]),
        partners: getLen(results[3]),
        speakRequests: getLen(results[4]),
        subscriptions: getLen(results[5]),
        pastEditionRequests: getLen(results[6]),
        exhibitSponsors: getLen(results[7]),
      });
    } catch (err) {
      console.error(err);
    }
  }

  async function fetchBookingsChart() {
    try {
      // fetch a larger page to build chart; if there are many records this may be adjusted later
      const res = await api.get("/booking", { params: { page: 1, limit: 1000 } });
      if (res.data?.data) {
        const grouped = {};
        res.data.data.forEach((b) => {
          const date = new Date(b.createdAt).toLocaleDateString();
          grouped[date] = (grouped[date] || 0) + 1;
        });
        const chartData = Object.entries(grouped).map(([date, count]) => ({
          date,
          count,
        }));
        setBookingsChart(chartData);
      }
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="space-y-6">
      {/* Top Stats - 4 cards per row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item, idx) => (
          <Card
            key={idx}
            className={`bg-gradient-to-r ${item.color} text-white`}
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm opacity-80">{item.label}</div>
                <div className="text-3xl font-bold">{item.value}</div>
              </div>
              <div className="p-3 bg-opacity-30 bg-white rounded-md">
                {item.icon}
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Full-width Charts & Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="h-96">
          <h3 className="font-semibold mb-2 text-gray-700">
            Bookings Over Time
          </h3>
          <ResponsiveContainer width="100%" height="85%">
            <BarChart data={bookingsChart}>
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#2563eb" />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        <Card className="h-96 overflow-y-auto">
          <h3 className="font-semibold mb-2 text-gray-700">Recent Bookings</h3>
          {bookingsChart.length === 0 ? (
            <div className="text-gray-400 text-center mt-20">
              No recent activity
            </div>
          ) : (
            <ul className="space-y-2">
              {bookingsChart
                .slice(-10)
                .reverse()
                .map((b, idx) => (
                  <li key={idx} className="flex justify-between border-b pb-1">
                    <span>{b.date}</span>
                    <span className="font-bold">{b.count}</span>
                  </li>
                ))}
            </ul>
          )}
        </Card>
      </div>
    </div>
  );
}
