import film from '../../img/svg/icon-film.svg';
import book from '../../img/svg/icon-book.svg';

const Progress = () => {
  return (
    <div className="progress">
      <span className="progress__span">Ваш прогресс:</span>
      <h3 className="progress__title">Интенсив по соцсетям</h3>
      <div className="progress__bar">
        <p className="progress__bar-number">46%</p>
        <div className="progress__band">
          <span></span>
        </div>
      </div>
      <div className="progress__types">
        <div className="progress__type">
          <div className="progress__type-info">
            <div className="progress__type-img">
              <img src={film} alt="" />
            </div>
            <div className="progress__type-name">Видео</div>
          </div>
          <div className="progress__type-number">
            <p> 1 из 9</p>
          </div>
        </div>
        <div className="progress__type">
          <div className="progress__type-info">
            <div className="progress__type-img">
              <img src={book} alt="" />
            </div>
            <div className="progress__type-name">Тесты</div>
          </div>
          <div className="progress__type-number">
            <p> 5 из 5</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progress;
