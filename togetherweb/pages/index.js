import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const myFontSize = 36;

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Together</title>
        <meta name="description" content="A social app that is, well, truly social." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div style={{
        width:"100%",
        height:"100vh",
        backgroundColor:"red",
        overflow: "auto"
      }}>
        <div style={{
          width:"100%",
          height: "100px",
          marginTop:"3%",
          backgroundColor:"blue",
          overflow: "auto",
          display:"flex",
          justifyContent: "space-between"
        }}>
          <div style={{
            width: "20%",
            height: "50px",
            backgroundColor:"green",
            marginTop: "25px",
            marginLeft: "3%",
            fontSize: {myFontSize}
          }}>Together.</div>
          <div style={{
            width: "40%",
            height: "50px",
            backgroundColor:"green",
            marginTop: "25px",
            marginLeft: "0px",
            marginRight: "3%",
            display: "flex"
          }}>
            <div style={{
              width: "33%",
              height: "100%",
              backgroundColor: "orange",
              fontSize: {myFontSize},
              paddingLeft: "9%"
            }}>Log In</div>
            <div style={{
              width: "33%",
              height: "100%",
              backgroundColor: "cyan",
              fontSize: {myFontSize},
              paddingLeft: "7%"
            }}>Sign Up</div>
            <div style={{
              width: "34%",
              height: "100%",
              backgroundColor: "yellow",
              display: "flex"
            }}>
              <div style={{
                width: "50%",
                height: "100%",
                backgroundColor: "purple"
              }}>
                <FontAwesomeIcon
                  icon={faSearch}
                  style={{color: "white" }}
                />
              </div>
              <div style={{
                width: "50%",
                height: "100%",
                backgroundColor: "grey"
              }}>
                <FontAwesomeIcon
                  icon={faBars}
                  style={{color: "white" }}
                />
              </div>
            </div>
          </div>
        </div>

        <div style={{
          width: "70%",
          height: "66%",
          marginTop: "5%",
          marginLeft: "15%",
          backgroundColor: "black"
        }}>
          <div style={{

          }}>

          </div>
        </div>
      </div>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
