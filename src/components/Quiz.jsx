import { useState } from 'react';

const Quiz = ({ question, options, correctIndex, onNextQuestion }) => {
  const [selected, setSelected] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  const handleAnswer = (index) => {
    if (isCorrect) return;
    setSelected(index);
    setIsCorrect(index === correctIndex);
  };

  const handleRetry = () => {
    window.location.reload();
  };

  const handleNext = () => {
    setSelected(null);
    setIsCorrect(null);
    if (onNextQuestion) onNextQuestion();
  };

  return (
    <div style={{
      background: 'rgba(0,0,0,0.6)',
      padding: '20px',
      borderRadius: '15px',
      border: '1px solid #58a6ff',
      margin: '20px 0'
    }}>
      <h3 style={{ color: '#fff', marginBottom: '15px' }}>{question}</h3>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {options.map((option, index) => {
          let buttonStyle = {
            fontFamily: 'Male2, serif',
            padding: '10px 15px',
            borderRadius: '8px',
            fontSize: '16px',
            border: '1px solid #3a4a5a',
            backgroundColor: 'rgba(30,40,50,0.8)',
            color: '#ccc',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          };

          if (selected !== null) {
            if (isCorrect) {
              if (index === correctIndex) {
                buttonStyle = {
                  ...buttonStyle,
                  backgroundColor: '#0d290eff',
                  borderColor: '#9fdfa3ff',
                  color: '#a7f5bcff',
                  boxShadow: '0 0 20px rgba(76, 175, 80, 0.6)',
                  transform: 'scale(1.02)'
                };
              } else {
                buttonStyle = {
                  ...buttonStyle,
                  opacity: 0.5,
                  cursor: 'default'
                };
              }
            } else {
              if (index === selected) {
                buttonStyle = {
                  ...buttonStyle,
                  backgroundColor: '#331111ff',
                  borderColor: '#ef5350',
                  color: '#ff4545ff',
                  animation: 'shake 0.4s ease-in-out'
                };
              } else if (index === correctIndex) {
                buttonStyle = {
                  ...buttonStyle,
                  opacity: 1,
                  cursor: 'default'
                };
              } else {
                buttonStyle = {
                  ...buttonStyle,
                  opacity: 0.5,
                  cursor: 'default'
                };
              }
            }
          }

          return (
            <button
            className="nty"
              key={index}
              onClick={() => handleAnswer(index)}
              style={buttonStyle}
            >
              {option}
              {isCorrect && index === correctIndex && ' ✅'}
            </button>
          );
        })}
      </div>

      {selected !== null && (
        <div style={{ marginTop: '15px' }}>
          <div style={{
            padding: '10px',
            borderRadius: '8px',
            textAlign: 'center',
            fontWeight: 'bold',
            backgroundColor: isCorrect ? 'rgba(76, 175, 80, 0.2)' : 'rgba(244, 67, 54, 0.2)',
            border: `1px solid ${isCorrect ? '#66bb6a' : '#ef5350'}`,
            color: isCorrect ? '#66bb6a' : '#ef5350'
          }}>
            {isCorrect 
              ? '✅ Верно! Молодец!' 
              : '❌ Неверно. Прочитай материал еще раз и попробуй снова!'}
          </div>
        
            <button 
              className="nty"
              onClick={handleRetry}
              style={{
                marginTop: '10px',
                padding: '8px 20px',
                borderRadius: '20px',
                border: '1px solid #90b5c3ff',
                backgroundColor: 'rgba(44, 26, 25, 0.2)',
                color: '#50d4efff',
                cursor: 'pointer',
                transition: '0.3s',
                width: '100%'
              }}
            >
              Переделать
            </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;