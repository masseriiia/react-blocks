import Button from '../../common/Button';
import programThree from '../../img/program-3.png';
import programOne from '../../img/program-3.png';
import programTwo from '../../img/program-3.png';

const dataProgram = [
  {
    id: 1,
    img: programOne,
    title: 'Система компенсацій Amway',
    descr: 'Додаткові бонуси та мотиваційні подорожі!',
  },
  {
    id: 2,
    img: programTwo,
    title: 'Програми підтримки продажів',
    descr: 'Додаткові бонуси та мотиваційні подорожі!',
  },
];

const Conditions = () => {
  return (
    <section className="conditions">
      <div className="conditions__inner">
        <h2 className="conditions__title">Умови отриманння доходу</h2>
        <p className="conditions__descr">
          Основний план Amway – модель, яка з 1959 року допомагає людям у різних країнах
          отримувати дохід та покращувати якість життя.
        </p>
        <div className="conditions__buttons">
          <Button>Для НПА</Button>
          <Button>Для ПУ</Button>
        </div>
      </div>
      <div className="conditions__blocks">
        <div className="conditions__first-block">
          {dataProgram.map((item) => (
            <div key={item.id} className="conditions__item-1">
              <img className="conditions__image" src={item.img} alt="Program" />
              <h3 className="conditions__item-title">{item.title}</h3>
              <p className="conditions__item-descr">{item.descr}</p>
            </div>
          ))}
        </div>
        <div className="conditions__second-block">
          <div className="conditions__item-2">
            <img className="conditions__image" src={programThree} alt="Program " />
            <h3 className="conditions__item-title">
              Програма дискреційних заохочень Бізнес Плюс⁺
            </h3>
            <p className="conditions__item-descr">
              Додаткові винагороди: виконуйте умови програми, розвивайте стабільний бізнес
              та відкривайте нові переваги співпраці з Amway!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Conditions;
