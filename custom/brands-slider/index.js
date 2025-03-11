const template = `
<div class="b-section">
    <div class="brands">
      <div class="brands__slide">
      <img src="/custom/brands-slider/Logo MinMolodi.png" alt="Міністерство Молоді" />
      <img src="/custom/brands-slider/Logo MinDovkilya.png" alt="Міністерство Довкілля" />
      <img src="/custom/brands-slider/Logo MinEconomy.png" alt="Міністерство Економіки" />
        <img src="/custom/brands-slider/Logo Diia.png" alt="Дія" />
        <img src="/custom/brands-slider/Logo MinDigital.png" alt="МінЦифра" />
        <img src="/custom/brands-slider/Logo Kitsoft.png" alt="KITSOFT" />
        <img src="/custom/brands-slider/Logo BRDO.png" alt="БРДО" />
      </div>
  </div>
</div>
`;

const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = '/custom/brands-slider/style.css';
document.head.appendChild(link);

link.onload = () => {
	const heroSection = document.querySelector('#hero-section');
	heroSection.insertAdjacentHTML('afterend', template);

	let brandsBarSlide = document.querySelector('.brands__slide').cloneNode(true);
	document.querySelector('.brands').appendChild(brandsBarSlide);
};
