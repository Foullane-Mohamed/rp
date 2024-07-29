// script.js
document.addEventListener('DOMContentLoaded', () => {
  const map = L.map('map').setView([32.3078, -9.2361], 10); // مركز الخريطة على مدينة أسفي

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  // بيانات الإحداثيات
  const locations = [
    { lat: 32.664108, lng: -9.006899, label: 'موقع 1: pH 6.8' },
    { lat: 32.664623, lng: -9.036011, label: 'موقع 2: pH 6.7' },
    { lat: 32.664839, lng: -9.068059, label: 'موقع 3: pH 7.5' },
    { lat: 32.663747, lng: -9.092700, label: 'موقع 4: pH 8.9' },
    { lat: 32.640814, lng: -9.114624, label: 'موقع 5: pH 7.7' },
    { lat: 32.605119, lng: -9.070100, label: 'موقع 6: pH 6.3' },
    { lat: 32.560375, lng: -9.035415, label: 'موقع 7: pH 6.2' },
    { lat: 32.560375, lng: -9.035415, label: 'موقع 8: pH 7.5' },
    { lat: 32.513061, lng: -8.964457, label: 'موقع 9: pH 6.8' },
    { lat: 32.459672, lng: -8.885814, label: 'موقع 10: pH 8.7' },
    { lat: 32.420656, lng: -8.813444, label: 'موقع 11: pH 7.8' },
    { lat: 401696, lng: -8.746130, label: 'موقع 12: pH 7.1' },
    { lat: 32.358516, lng: -8.686569, label: 'موقع 13: pH 7.0' },
    { lat: 32.325510, lng: -8.628757, label: 'موقع 14: pH 6.8' },
    { lat: 32.476331, lng: -8.746213, label: 'موقع 15: pH 8.2' },
    { lat: 32.446014, lng: -8.694312, label: 'موقع 16: pH 6.4' },
    { lat: 32.412752, lng: -8.645407, label: 'موقع 17: pH 6.9' },
    { lat: 32.495717, lng: -8.669867, label: 'موقع 18: pH 6.8' },
    { lat: 32.561435, lng: -9.187555, label: 'موقع 19: pH 8.5' },
    { lat: 32.562771, lng: -9.195556, label: 'موقع 20: pH 7.4' },
    { lat: 32.543909, lng: -9.151411, label: 'موقع 21: pH 7.6' },
    { lat: 32.525330, lng: -9.132522, label: 'موقع 22: pH 7.9' },
    { lat: 32.503560, lng: -9.084668, label: 'موقع 23: pH 7.6' },
    { lat: 32.443003, lng: -9.014146, label: 'موقع 24: pH 7.5' },
    { lat: 32.397292, lng: -8.953699, label: 'موقع 25: pH 7.4' },
    { lat: 32.362196, lng: -8.898289, label: 'موقع 26: pH 7.9' },
    { lat: 32.332407, lng: -8.849176, label: 'موقع 27: pH 6.8' },
    { lat: 32.301544, lng: -8.773617, label: 'موقع 28: pH 7.6' },
    { lat: 32.272800, lng: -8.710652, label: 'موقع 29: pH 7.3' },
    { lat: 32.210214, lng: -8.837672, label: 'موقع 30: pH 8.5' },
    { lat: 32.251187, lng: -8.904650, label: 'موقع 31: pH 7.8' },
    { lat: 32.283350, lng: -8.987457, label: 'موقع 32: pH 8.6' },
    { lat: 32.298542, lng: -9.026394, label: 'موقع 33: pH 6.2' },
    { lat: 32.317528, lng: -9.059341, label: 'موقع 34: pH 7.7' },
    { lat: 32.345367, lng: -9.110259, label: 'موقع 35: pH 7.9' },
    { lat: 32.363078, lng: -9.158181, label: 'موقع 36: pH 6.9' },
    { lat: 32.384882, lng: -9.223322, label: 'موقع 37: pH 8.7' },
    { lat: 32.279350, lng: -9.186599, label: 'موقع 38: pH 8.9' },
    { lat: 32.266100, lng: -9.134280, label: 'موقع 39: pH 7.6' },
    { lat: 32.248679, lng: -9.066989, label: 'موقع 40: pH 8.1' },
    { lat: 32.238226, lng: -9.012057, label: 'موقع 41: pH 7.4' },
    { lat: 32.217315, lng: -8.966739, label: 'موقع 42: pH 7.3' },
    { lat: 32.181291, lng: -8.931033, label: 'موقع 43: pH 7.2' },
    { lat: 32.143744, lng: -8.862231, label: 'موقع 44: pH 8.6' },
    { lat: 32.120874, lng: -8.886932, label: 'موقع 45: pH 6.5' },
    { lat: 32.123641, lng: -8.926127, label: 'موقع 46: pH 7.6' },
    { lat: 32.130556, lng: -8.983286, label: 'موقع 47: pH 8.8' },
    { lat: 32.138853, lng: -9.030647, label: 'موقع 48: pH 7.1' },
    { lat: 32.119851, lng: -9.113073, label: 'موقع 49: pH 6.0' },
    { lat: 32.126421, lng: -9.143694, label: 'موقع 50: pH 8.5' },
    { lat: 32.135756, lng: -9.193504, label: 'موقع 51: pH 8.0' },
    { lat: 32.140942, lng: -9.220859, label: 'موقع 52: pH 8.3' },
    { lat: 32.145090, lng: -9.255971, label: 'موقع 53: pH 6.8' },
    { lat: 32.124346, lng: -9.285238, label: 'موقع 54: pH 6.0' },
    { lat: 32.100831, lng: -9.239510, label: 'موقع 55: pH 8.0' },
    { lat: 32.089763, lng: -9.177451, label: 'موقع 56: pH 8.1' },
      // أضف المزيد من المواقع هنا
  ];

  // إضافة علامات على الخريطة
  locations.forEach(location => {
      L.marker([location.lat, location.lng]).addTo(map)
          .bindPopup(location.label)
          .openPopup();
  });
});
