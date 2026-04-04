export function loadRazorpay() {
  return new Promise((resolve) => {
    // If already loaded → return immediately  
    if (window.Razorpay) {
      resolve(true);
      return;
    }

    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;

    script.onload = () => {
      console.log("Razorpay SDK Loaded");
      resolve(true);
    };

    script.onerror = () => {
      console.error("Razorpay SDK Failed to Load");
      resolve(false);
    };

    document.body.appendChild(script);
  });
}
