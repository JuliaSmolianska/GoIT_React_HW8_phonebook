const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
  image: {
    paddingLeft: '30%',
    alignItems: 'center',
  },
};

export default function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Phone book welcome page </h1>
      <br />
      <div style={styles.image}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxZroJMWu2oyCXNEnbLiQvRaWM-Q1RUgpD0w&usqp=CAU"
          width="50%"
          height="300"
          alt="phone book"
        />
      </div>
    </div>
  );
}
