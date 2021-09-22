import Head from "next/head";
import Link from "next/link";
import React from "react";
import axios from "axios";
import styles from "../styles/Home.module.scss";
import Image from "next/image";
import bg from "../svg.png";
import olivepack from "../olivepack.jpg";
import honeypack from "../honeypack.jpg";
import blackseedpack from "../blackseedpack.jpg";

import { ToastContainer, toast } from "react-toastify";

export default function Home() {
  const [email, setEmail] = React.useState("");
  const [errMessage, setErrMessage] = React.useState("");
  const [successMessage, setSuccessMessage] = React.useState("");

  const onChange = (e) => {
    const {
      target: { value },
    } = e;

    console.log(value);
    setEmail(value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!email) return;

    console.log(email);
    axios
      .post("https://prophetic-medicine-backend.herokuapp.com/signup", {
        email,
      })
      .then((res) => {
        console.log(res.data);
        setSuccessMessage(res.data);
        toast.success(successMessage);
      });
    // .catch((err) => {
    //   console.log(err.response.data);
    //   setErrMessage(err.response.data);
    //   toast(errMessage);
    // });
  };
  return (
    <div>
      <Head>
        <title>Prophetic Medicine | A blessing to mankind </title>
        <meta
          name="description"
          content="Prophetic medicine blog | Blessing sent by Allah through Prophet Muhammad (S.A.W) "
        />
        <meta
          name="keywords"
          content="sunnah,prophetic,islam,islamic,medicine,health,solution blog,blessing"
        />
        <meta name="author" content="Balogun Abdulganiyy" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <header className={styles.header}>
        <div className={styles.header__bg}></div>
        <Image src={bg} alt="Picture of the author" layout="fill" />
        <div className={styles.header_text}>
          <h1 className={styles.headingprimary}>
            <span className={styles.headingprimary_main}>
              Prophetic Medicine
            </span>
            <span className={styles.headingprimary_sub}>
              Blessing to mankind
            </span>
          </h1>
        </div>
      </header>
      <main className={styles.main}>
        <section className={styles.section_about}>
          <div className={styles.center}>
            <h2 className={styles.heading_secondary}>
              PROPHETIC MEDICINE FREEBIES
            </h2>
          </div>
          <div className={styles.row}>
            <div className={styles.two_colgrid}>
              <div>
                <h3 className={styles.heading_tertiary}>
                  up-to-date information
                </h3>
                <p className={styles.paragraph}>
                  You can have access to a single list of prophetic medicines.
                  This can be used for personal purpose and shared with family
                  and friends.
                </p>
                <h3 className={styles.heading_tertiary}>
                  GET MORE FREE INFORMATION SENT TO YOUR INBOX
                </h3>
                <p className={styles.paragraph}>
                  You will also get more freebies of prophetic medicines
                  regularly sent to your email box. This list here will also get
                  changes as I come across more information.
                </p>
                {/* subscription form  */}
                <div className={styles.subscribeform}>
                  <form className={styles.form} onSubmit={onSubmit}>
                    <div className={styles.form_group}>
                      <input
                        type="email"
                        placeholder="Email Address"
                        value={email}
                        className={styles.form_input}
                        onChange={(e) => onChange(e)}
                      />
                    </div>
                    <div className={styles.form_group}>
                      <button type="submit" className={styles.form_button}>
                        SEND ME FREEBIES
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className={styles.composition}>
                <div
                  className={`${styles.composition_photo} ${styles.composition_photo_1}`}
                >
                  <Image src={honeypack} alt="honey" layout="fill" />
                </div>
                <div
                  className={`${styles.composition_photo} ${styles.composition_photo_2}`}
                >
                  <Image src={olivepack} alt="olive" layout="fill" />
                </div>
                <div
                  className={`${styles.composition_photo} ${styles.composition_photo_3}`}
                >
                  <Image src={blackseedpack} alt="blackseed" layout="fill" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.section_solutions}>
          <div className={styles.center}>
            <h2 className={styles.heading_secondary}>PROPHETIC SOLUTIONS</h2>
          </div>
          <div className={styles.row}>
            <div className={styles.three_colgrid}>
              <div className={styles.solution}>
                <h3 className={styles.heading_tertiary}>ULCER</h3>
                <div>
                  <h4 className={styles.heading_tertiary_two}>INGREDIENTS</h4>
                  <ul className={styles.solutions_list}>
                    <li>TUMERIC POWDER</li>
                    <li>RAW RICE</li>
                    <li>CAMEL MILK</li>
                    <li>SALT</li>
                  </ul>
                  <h4 className={styles.heading_tertiary_two}>
                    PREPARATION & DOSAGE
                  </h4>
                  <p>
                    Cook two cups of rice, add very little salt,two or three
                    spoons of tumeric. Allow the water to dry before removing it
                    from fire. Mix the rice with camel milk and serve. Take
                    zamzam water after eating.
                  </p>
                </div>
              </div>
              <div className={styles.solution}>
                <h3 className={styles.heading_tertiary}>HIGH BLOOD PRESSURE</h3>
                <div>
                  <h4 className={styles.heading_tertiary_two}>INGREDIENTS</h4>
                  <ul className={styles.solutions_list}>
                    <li>APPLE CIDER</li>
                    <li>ZAYTOON OIL</li>
                  </ul>
                  <h4 className={styles.heading_tertiary_two}>
                    PREPARATION & DOSAGE
                  </h4>
                  <p>
                    Mix the apple cider with zaytoon oil of equal quantity. Take
                    two spoons in the morning and night
                  </p>
                </div>
              </div>
              <div className={styles.solution}>
                <h3 className={styles.heading_tertiary}>MAN POWER</h3>
                <div>
                  <h4 className={styles.heading_tertiary_two}>INGREDIENTS</h4>
                  <ul className={styles.solutions_list}>
                    <li>BIG EMPTY COCACOLA BOTTLE</li>
                    <li>OROGBO(yoruba name)</li>
                    <li>ORIGINAL HONEY</li>
                    <li>LIME</li>
                  </ul>
                  <h4 className={styles.heading_tertiary_two}>
                    PREPARATION & DOSAGE
                  </h4>
                  <p>
                    Fill the cocacola bottle to half with the orogbo slices to
                    half. Add honey to fill 3/4 of the bottle. Then add water
                    and lime to fill the bottle to the brim. Leave for three
                    days and start taking one short cup morning and night.
                  </p>
                </div>
              </div>
              <div className={styles.solution}>
                <h3 className={styles.heading_tertiary}>BALDNESS</h3>
                <div>
                  <h4 className={styles.heading_tertiary_two}>INGREDIENTS</h4>
                  <ul className={styles.solutions_list}>
                    <li>GARLIC</li>
                  </ul>
                  <h4 className={styles.heading_tertiary_two}>
                    PREPARATION & DOSAGE
                  </h4>
                  <p>
                    Grind wet garlic and keep applying it on the affected parts
                    for atleast two months
                  </p>
                </div>
              </div>
              <div className={styles.solution}>
                <h3 className={styles.heading_tertiary}>HIV/HEPATITIS B</h3>
                <div>
                  <h4 className={styles.heading_tertiary_two}>INGREDIENTS</h4>
                  <ul className={styles.solutions_list}>
                    <li>BLACK SEED</li>
                    <li>MURU(yoruba name)</li>
                    <li>GARLIC OIL</li>
                    <li>CAMEL URINE</li>
                    <li>PURE HONEY</li>
                  </ul>
                  <h4 className={styles.heading_tertiary_two}>
                    PREPARATION & DOSAGE
                  </h4>
                  <p>
                    Add one tin of black seed to half spoon of grounded muru.Eat
                    in the morning,afternoon and night for atleast 21 days. Mix
                    camel urine with pure honey. Drink six spoons after eating
                    the mixed blackseed and muru. Then drink one teaspoon of
                    garlic oil. Try to be a vegitarian for these 21 days if you
                    cant take only these as your food. You can also take only
                    the mixture of camel urine and honey as lunch if you are
                    full from the blackseed and muru taken in the morning.
                  </p>
                </div>
              </div>
              <div className={styles.solution}>
                <h3 className={styles.heading_tertiary}>PILE</h3>
                <div>
                  <h4 className={styles.heading_tertiary_two}>INGREDIENTS</h4>
                  <ul className={styles.solutions_list}>
                    <li>EGBO IDI(YORUBA NAME)</li>
                    <li>egbo ayin(yoruba name)</li>
                    <li>erunsinrin(yoruba name)</li>
                    <li>alubosa elewe(yoruba name)</li>
                    <li>iru woro(yoruba name)</li>
                    <li>eso boni(yoruba name)</li>
                  </ul>
                  <h4 className={styles.heading_tertiary_two}>
                    PREPARATION & DOSAGE
                  </h4>
                  <p>
                    Dice all ingredients into pieces, add water and boil in a
                    pot. Drink short cup of the mixture in the morning and night
                    while keeping it warm.
                  </p>
                </div>
              </div>
              <div className={styles.solution}>
                <h3 className={styles.heading_tertiary}>
                  PREGNANT WOMAN IN LABOUR
                </h3>
                <div>
                  <h4 className={styles.heading_tertiary_two}>INGREDIENTS</h4>
                  <ul className={styles.solutions_list}>
                    <li>ZAYTOON POWDER</li>
                    <li>DATES POWDER</li>
                  </ul>
                  <h4 className={styles.heading_tertiary_two}>
                    PREPARATION & DOSAGE
                  </h4>
                  <p>
                    Boil the same quantity of zaytoon and dates powder in water.
                    Allow to cool and give one long cup of the mixture to the
                    labouring woman.
                  </p>
                </div>
              </div>
              <div className={styles.solution}>
                <h3 className={styles.heading_tertiary}>SLEEPLESSNESS</h3>
                <div>
                  <h4 className={styles.heading_tertiary_two}>INGREDIENTS</h4>
                  <ul className={styles.solutions_list}>
                    <li>Warm Milk(Camel or Peak Milk or Cow Milk</li>
                    <li>Original Honey</li>
                  </ul>
                  <h4 className={styles.heading_tertiary_two}>
                    PREPARATION & DOSAGE
                  </h4>
                  <p>
                    Get a short cup filled with the warm milk and add one spoon
                    of original honey then drink one hour to sleeping time.
                  </p>
                </div>
              </div>
              <div className={styles.solution}>
                <h3 className={styles.heading_tertiary}>Kidney Disease</h3>
                <div>
                  <h4 className={styles.heading_tertiary_two}>INGREDIENTS</h4>
                  <ul className={styles.solutions_list}>
                    <li>BLACKSEED(SEEDS)</li>
                  </ul>
                  <h4 className={styles.heading_tertiary_two}>
                    PREPARATION & DOSAGE
                  </h4>
                  <p>
                    Boil the seeds in a pot for two hours to the softness of
                    cooked beans. Extract the water and put in one place. Add
                    honey to the cooked seeds. Eat two spoons morning,afternoon
                    and night. Drink the water extract after eating.
                  </p>
                </div>
              </div>
              <div className={styles.solution}>
                <h3 className={styles.heading_tertiary}>
                  Kidney,Heart,liver problems
                </h3>
                <div>
                  <h4 className={styles.heading_tertiary_two}>INGREDIENTS</h4>
                  <ul className={styles.solutions_list}>
                    <li>FRESH COW BILE</li>
                    <li>LIME</li>
                    <li>HONEY</li>
                  </ul>
                  <h4 className={styles.heading_tertiary_two}>
                    PREPARATION & DOSAGE
                  </h4>
                  <p>
                    Mix all the ingredients together at the same quantity,
                    recite suratul fatiha it and take four spoons every
                    morning,afternoon and night.
                  </p>
                </div>
              </div>
              <div className={styles.solution}>
                <h3 className={styles.heading_tertiary}>Kidney Disease</h3>
                <div>
                  <h4 className={styles.heading_tertiary_two}>INGREDIENTS</h4>
                  <ul className={styles.solutions_list}>
                    <li>BLACKSEED(SEEDS)</li>
                  </ul>
                  <h4 className={styles.heading_tertiary_two}>
                    PREPARATION & DOSAGE
                  </h4>
                  <p>
                    Boil the seeds in a pot for two hours to the softness of
                    cooked beans. Extract the water and put in one place. Add
                    honey to the cooked seeds. Eat two spoons morning,afternoon
                    and night. Drink the water extract after eating.
                  </p>
                </div>
              </div>
              <div className={styles.solution}>
                <h3 className={styles.heading_tertiary}>Skin Cancer</h3>
                <div>
                  <h4 className={styles.heading_tertiary_two}>INGREDIENTS</h4>
                  <ul className={styles.solutions_list}>
                    <li>BLACK SEED OIL</li>
                  </ul>
                  <h4 className={styles.heading_tertiary_two}>
                    PREPARATION & DOSAGE
                  </h4>
                  <p>
                    Rub your body with black seed oil after taking bath in the
                    morning and evening.
                  </p>
                </div>
              </div>
              <div className={styles.solution}>
                <h3 className={styles.heading_tertiary}>Rheumatism</h3>
                <div>
                  <h4 className={styles.heading_tertiary_two}>INGREDIENTS</h4>
                  <ul className={styles.solutions_list}>
                    <li>aparun powder</li>
                    <li>honey</li>
                    <li>shea butter</li>
                    <li>dunu shifaa</li>
                    <li>alo balm</li>
                  </ul>
                  <h4 className={styles.heading_tertiary_two}>
                    PREPARATION & DOSAGE
                  </h4>
                  <p>
                    Mix aparun powder with original honey and take two spoons in
                    the morning,afternoon and night.Also rub dunu shifaa, alo
                    balm and a misture of aparun powder mixed with shea butter
                    on the affected parts.
                  </p>
                </div>
              </div>
              {/* End of solutions section */}
            </div>
          </div>
        </section>
        <section className={styles.more}>
          <div className={styles.center}>
            <h2 className={styles.heading_secondary}>MORE FREEBIES</h2>
          </div>
          <div className={styles.row}>
            <div className={styles.more_item}>
              <h3 className={styles.heading_tertiary}>
                [madinah free arabic course]
              </h3>

              <p className={styles.paragraph}>
                Use the below resources for studying and mastering the Books 1,2
                and 3 of “Lessons in Arabic language” [as taught at the Islaamic
                University of Madeenah] written by Shaykh Dr. V. ‘Abdur-Raheem
              </p>
              <Link href="https://abdurrahman.org/arabic-learning/madina-arabic/">
                <a className={styles.link}>Visit resource</a>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className={styles.footer}>
        <div className={styles.center}>
          Website created with love by{" "}
          <a href="https://wa.me/+23481784354" className={styles.footer_link}>
            {" "}
            Abu Taw'ameen
          </a>
        </div>
      </footer>
      <ToastContainer />
    </div>
  );
}
