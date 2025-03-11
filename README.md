
# Weather-App-React-Tailwind
Weather-App-React-Tailwind-Geolacation

# Weather App

![Aratma](/weather-app/src/assets/search.png)
![Hava Durum Detayi](/weather-app/src/assets/weatherDeatils.png)


Bu proje, React ile geliştirilmiş bir hava durumu uygulamasıdır. Kullanıcının konumuna bağlı olarak gerçek zamanlı hava durumu verilerini çeker ve görüntüler. Uygulama responsive yapıya sahiptir ve custom hooks kullanılarak daha modüler bir kod yapısı oluşturulmuştur.

## Özellikler

- Konum Bazlı Hava Durumu:  Kullanıcının mevcut konumunu kullanarak hava durumu bilgilerini getirir.
- Günlük ve Haftalık Tahminler: Anlık hava durumu ve önümüzdeki birkaç gün için tahminler gösterilir.
- Dinamik Arka Plan ve İkonlar: Hava koşullarına ve günün saatine bağlı olarak değişen arka plan görselleri ve hava durumu ikonları.
- Responsive Tasarım: Mobil ve masaüstü cihazlar için uyumlu bir kullanıcı arayüzü.
- Custom Hooks Kullanımı: API çağrıları ve veri yönetimi için özel React hook'ları kullanılmıştır.

## Kurulum ve Çalıştırma

### 1. Depoyu Klonlayın
```sh
git clone https://github.com/kullanici/weather-app.git
cd weather-app
```

### 2. Bağımlılıkları Yükleyin
```sh
npm install
```

### 3. Çevre Değişkenlerini Tanımlayın
Bir `.env` dosyası oluşturarak OpenWeather API anahtarınızı girin:
```env
REACT_APP_API_KEY=your_openweather_api_key
```

### 4. Uygulamayı Çalıştırın
```sh
npm start
```

### 5. Kullanım
- Açılan tarayıcıda konum erişimine izin verin.
- Güncel hava durumu bilgilerini görün.
- Haftalık tahminleri inceleyin.

## Kullanılan Teknolojiler
- **React.js** - Ön yüz geliştirme
- **Tailwind CSS** - Stil yönetimi
- **OpenWeather API** - Hava durumu verileri
- **React Hooks (useState, useEffect, custom hooks)** - Durum yönetimi

## Geliştirme
Proje ile ilgili geliştirme yapmak isterseniz, pull request gönderebilir veya issue açabilirsiniz. Katkılarınızı bekliyoruz! 🚀

## Lisans
Bu proje MIT lisansı ile lisanslanmıştır.


>>>>>>> e45d6c1 (🌦️ Initial commit: Responsive weather app with custom hooks & location-based data)
