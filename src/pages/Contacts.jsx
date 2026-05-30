const Contacts = () => (
  <div style={{ fontFamily: 'Male2, serif' }}>
  <div className="content-container animate-in">
    <div className="about-card">
      <h1>Контакты:</h1>
      <h3>Телефон:</h3>
      <a href="tel:9999999999" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="btn-read">+7(999)99999</a>

      <h3>Вк:</h3>
      <a 
        href="https://yandex.ru/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="btn-read">Вк</a>

      <h3>Теллеграмм</h3>
        <a href="https://yandex.ru/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="btn-read">Телеграмм</a>
    </div>  
    </div>
  </div>
);
export default Contacts;