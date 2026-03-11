import Button from "../../components/base/Button/index";
import AboutImage from "../../assets/images/R.png";
import styles from "./index.module.css";
import Card from "./CardComponent/index";
import About2 from "../../assets/images/Pic About 2.png";

const index = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.left}>
        <div className={styles.left_upper}>
          <div className={styles.aboutBtn}>
            <Button>ABOUT US</Button>
          </div>
          <h1>How much is your property worth now?</h1>
          <p>
            We have built our reputation as true local area experts. We have
            gained more knowledge about buyer interests, our neighborhood and
            the market than any other brand because we live locally and work
            for local people.
          </p>
        </div>
        <div className={styles.left_lower}>
          <div className={styles.upper_box}>
          <Card
            h3="178K+"
            p="Lorem ipsum dolor amet, consectetur adipiscing elit. Faucibus in libero."
          />
          <Card
            h3="362"
            p="Lorem ipsum dolor amet, consectetur adipiscing elit."
          />
          </div>
          <div className={styles.thumbnailCard}>
            <div className={styles.thumbnailText}>
              <h3>Title</h3>
              <p>
                Lorem ipsum dolor amet, consectetur adipiscing elit. Faucibus
                in libero.
              </p>
            </div>
            <div>
            <img
              src={About2}
              alt="property thumbnail"
              className={styles.thumbnailImg}
            />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.aboutImage}>
          <img src={AboutImage} alt="About interior" />
        </div>
      </div>
    </div>
  );
};

export default index;
