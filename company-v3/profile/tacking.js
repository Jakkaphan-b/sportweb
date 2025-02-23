// ฟังก์ชันสำหรับดึงข้อมูลพัสดุ
function getTrackingInfo(trackingNumber) {
    // ดึงข้อมูลพัสดุจากฐานข้อมูล
    // ในที่นี้จะใช่ข้อมูลตัวอย่าง
    const trackingInfo = {
      status: "กำลังจัดส่ง",
      date: "2022-01-01",
      receiverName: "ชื่อผู้รับ",
      receiverAddress: "ที่อยู่ผู้รับ",
      shippingMethod: "วิธีการจัดส่ง"
    };
    return trackingInfo;
  }
  
  // ฟังก์ชันสำหรับแสดงข้อมูลพัสดุ
  function displayTrackingInfo(trackingInfo) {
    const trackingStatus = document.getElementById("tracking-status");
    const trackingDate = document.getElementById("tracking-date");
    const receiverName = document.getElementById("receiver-name");
    const receiverAddress = document.getElementById("receiver-address");
    const shippingMethod = document.getElementById("shipping-method");
  
    trackingStatus.textContent = trackingInfo.status;
    trackingDate.textContent = trackingInfo.date;
    receiverName.textContent = trackingInfo.receiverName;
    receiverAddress.textContent = trackingInfo.receiverAddress;
    shippingMethod.textContent = trackingInfo.shippingMethod;
  }
  
  // ฟังก์ชันสำหรับดึงข้อมูลพัสดุและแสดงผล
  function trackPackage() {
    const trackingNumber = document.getElementById("tracking-number").value;
    const trackingInfo = getTrackingInfo(trackingNumber);
    displayTrackingInfo(trackingInfo);
  }
  
  // ฟังก์ชันสำหรับเรียกใช้เมื่อกดปุ่มติดตาม
  document.getElementById("track-button").addEventListener("click", trackPackage);