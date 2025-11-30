<form className="form">
  <div className="form-group">
    <label htmlFor="name">Ваше имя</label>
    <input
      type="text"
      id="name"
      name="name"
      placeholder="Введите имя"
      required
    />
  </div>

  <div className="form-group">
    <label htmlFor="phone">Телефон</label>
    <input
      type="tel"
      id="phone"
      name="phone"
      placeholder="+7 (___) ___-__-__"
      required
    />
  </div>

  <button type="submit" className="form-submit">
    Отправить
  </button>
</form>;
