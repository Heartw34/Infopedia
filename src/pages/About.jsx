const About = () => (
  <div style={{ fontFamily: 'Male, serif' }}>
  <div className="content-container animate-in">
    <div className="about-card">
      <h1>О нас</h1>

      <h3 className="Text1">Дизайнер:</h3>
      <p className="TxtY">Иванова Элеонора</p>
      <p className="TxtY">Антон Коневников</p>

      <h3 className="Text5">Видео, изображения и шрифты:</h3>
      <p className="TxtY">Антон Коневников</p>
      <p className="TxtY2">Отдельное спасибо за самостоятельные красивые изображения, шрифты и видео</p>

      <h3 className="Text2">Текст:</h3>
      <p className="TxtY">Арсений Сошников</p>
      <p className="TxtY2">Отдельное спасибо за красивый текст.</p>

      <h3 className="Text4">Звук и мелодия:</h3>
      <p className="TxtY">Мухаммет Нурыев</p>
      <p className="TxtY2">Отдельное спасибо за организаию и информацию</p>

       <h3 className="Text3">Цвета, шрифт</h3>
      <p className="TxtY">Арзув Байрамгелдиева</p>
      <p className="TxtY2">Отдельное спасибо за шрифт</p>

      <a href="/contacts" target="_blank" className="btn-read">Контакты:</a>
      <a href="/links" target="_blank" className="btn-read">Источники</a>
    </div>
  </div>
  </div>
);
export default About;