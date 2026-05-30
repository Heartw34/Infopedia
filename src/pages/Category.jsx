import { useParams } from 'react-router-dom';

const Category = () => {
  const { sectionName } = useParams();

  if (sectionName === 'cells') {
    return (
      <div className="content-container animate-in">
        <div className="content-card">
          {/* <h1>Клетка</h1>
          <h2>Строение клетки</h2>
          <p>Клетка — это элементарная единица всего живого.</p>
          <p><strong>Мембрана</strong> — оболочка, которая пропускает нужные вещества.</p>
          <p><strong>Ядро</strong> — хранит ДНК и управляет работой клетки.</p> */}
          <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, marginBottom: '20px' }}>
          <iframe 
            src="https://dzen.ru/video/watch/6461f8dccef3ab44179d80d4?ysclid=mpph3h8ii4883393724" // ← Замените VIDEO_ID
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', borderRadius: '10px' }}
          />
        </div>
        </div>
      </div>
    );
  }

  if (sectionName === 'ecology') {
    return (
      <div className="content-container animate-in">
        <div className="content-card">
          <h1>Экология</h1>
          <p>Изучение взаимодействия организмов с окружающей средой.</p>
        </div>
      </div>
    );
  }

  if (sectionName === 'rodents') {
    return (
      <div className="content-container animate-in">
        <div className="content-card">
          <h1>Грызуны</h1>
          <p>Суслики, хомяки, полёвки и бобры.</p>
        </div>
      </div>
    );
  }

  if (sectionName === 'predators') {
    return (
      <div className="content-container animate-in">
        <div className="content-card">
          <h1>Хищники</h1>
          <p>Лисицы, волки и енотовидные собаки.</p>
        </div>
      </div>
    );
  }

  if (sectionName === 'inwater') {
    return (
      <div className="content-container animate-in">
        <div className="content-card">
          <h1>Водные обитатели</h1>
          <p>Рыбы, раки, лягушки и водные насекомые.</p>
        </div>
      </div>
    );
  }

  if (sectionName === 'artiodactyls') {
    return (
      <div className="content-container animate-in">
        <div className="content-card">
          <h1>Парнокопытные</h1>
          <p>Лоси, олени, кабаны и косули.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="content-container animate-in">
      <div className="content-card">
        <h1>Страница в разработке</h1>
        <p>Здесь скоро появится информация.</p>
      </div>
    </div>
  );
};

export default Category;