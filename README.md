# Azra Çöpür — Portfolyo

Kişisel portfolyo websitesi. GitHub Pages üzerinde yayınlanmak üzere tasarlandı.

## Kurulum

1. Bu repoyu GitHub'a yükle (`azracopur/azracopur.github.io`)
2. GitHub Pages ayarlarında `main` branch → `/ (root)` olarak ayarla
3. `https://azracopur.github.io` adresinden erişebilirsin

## Proje Detayları Nasıl Eklenir?

`projects/` klasöründeki her `.html` dosyasını aç ve `<!-- İçerik buraya gelecek -->` yorumunun yerine HTML içerik ekle.

### Örnek:
```html
<h2 class="content-heading">Proje Hakkında</h2>
<p>Açıklama...</p>

<div class="project-image-wrap">
  <img src="../assets/screenshot.png" alt="Ekran görüntüsü" />
</div>

<h2 class="content-heading">Teknolojik Kararlar</h2>
<ul class="content-list">
  <li>Neden bu teknolojiyi seçtim</li>
</ul>
```

Ekran görüntülerini `assets/` klasörüne ekle.

## Yapı

```
azracopur.github.io/
├── index.html          # Ana sayfa
├── css/
│   ├── style.css       # Ana stiller
│   └── project.css     # Proje sayfası stilleri
├── js/
│   └── main.js         # Animasyonlar & interaktivite
├── projects/           # Proje detay sayfaları
│   ├── notegenie.html
│   ├── tubitak-1001.html
│   └── ...
└── assets/             # Görseller buraya
```
