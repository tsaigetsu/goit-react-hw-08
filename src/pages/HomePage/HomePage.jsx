import s from "./HomePage.module.css";

const HomePage = () => {
  return (
    <main className={s.main}>
      <div className={s.container}>
        <div className={s.hero}>
          <h1 className={s.mainTitle}>Your contact book</h1>
        </div>
        <div className={s.description}>
          <p className={s.p}>
            This page is designed to demonstrate a modern web application built
            with API integration, authentication, routing, Redux Toolkit, and
            React. The main functionality of this app revolves around managing
            contacts, including searching and deleting them, all while
            interacting with a backend service.
          </p>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
