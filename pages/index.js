import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


export default function Home() {

  const _ = require("lodash");
  let url = 'https://ipapi.co/2a02:2f04:c40d:6100:1155:c13b:a5db:73bc/json/';
  let lat = 0
  let long = 0
  let weather = "poateploua"
  let vreme = "mayberain"
  fetch(url)
    .then(res => res.json())
      .then(out => {
        console.log(out)
        lat = _.get(out, "latitude", null)
        long = _.get(out, "longitude", null)
      })
        .catch(err => error);
  console.log(lat)
  console.log(long)
  url = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + long + "&appid=5667d20d425ea4533bdbc1d9e3ec3962"
  fetch(url)
    .then(res => res.json())
      .then(out => {
        console.log(out)
        weather = _.get(out, "weather", null)
        console.log(weather)
        vreme = _.get(weather[0], "main", null)
        console.log(vreme)
      })
        .catch(err => error);

  return (
    
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Afara ploua?
        </h1>

        <p className={styles.oprisan}>
          {vreme === "Rain" && "Da!"}
          {vreme === "Extreme" && "AOLEEEEEEEU!"}
          {vreme != "Rain" && "Nu!"}
        </p>

      </main>
    </div>
  )
}
