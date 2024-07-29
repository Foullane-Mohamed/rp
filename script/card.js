// script.js
document.addEventListener('DOMContentLoaded', () => {
  const map = L.map('map').setView([32.3078, -9.2361], 10); // مركز الخريطة على مدينة أسفي

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  // بيانات الإحداثيات
  const locations = [
      { lat: 32.3078, lng: -9.2361, label: 'موقع 1' },
      { lat: 32.3150, lng: -9.2250, label: 'موقع 2' },
      // أضف المزيد من المواقع هنا
  ];

  // إضافة علامات على الخريطة
  locations.forEach(location => {
      L.marker([location.lat, location.lng]).addTo(map)
          .bindPopup(location.label)
          .openPopup();
  });
});
