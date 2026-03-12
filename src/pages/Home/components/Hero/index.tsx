import HeroImage1 from "../../../../assets/images/Group 6270.png";
import Button from "../../../../components/base/Button/index";
import styles from "./index.module.css";
import SendIcon from "../../../../assets/icons/send.png";
import SendArrow from "../../../../assets/icons/sendarrow.png";
import SendWhite from "../../../../assets/icons/sendwhite.png";


import HeroImage2 from "../../../../assets/images/Frame 6269 (1).png";

const index = () => {
  return (
    <div className={styles.container}>
      <div className={styles.upper}>
        <div className={styles.upper_left}>
          <div className={styles.upper_left_container}>
            <div className={styles.upper_text}>
              <h2>
                Glow Beyond
                <span>
                  <img className={styles.sendIcon} src={SendIcon} alt="send" />
                </span>
                <span className={styles.expectations}>Expectations</span>
              </h2>
              <p>
                Clean, effective, and cruelty-free skincare made to deliver
                visible results.
              </p>
            </div>
            <div className={styles.upper_button}>
              <Button>Shop Now <span className={styles.send}><img className={styles.btnArrow} src={SendWhite} alt="sendArrow" /></span></Button>
            </div>
          </div>
        </div>

        <div className={styles.upper_right}>
          <img src={HeroImage1} alt="heroImage1" />
        </div>
      </div>

      <div className={styles.lower}>
        <div className={styles.lower_container}>
          <h1>Why Choose Xtragleam?</h1>
          <div className={styles.lower_container_inner}>
            <div className={styles.lower_left}>
              <img src={HeroImage2} alt="heroImage2" />
            </div>
            <div className={styles.lower_right}>
              <div className={styles.lower_right_text}>
                <p className={styles.title}>Struggling with acne issues?</p>
                <p className={styles.description}>
                  At Xtragleam Skincare, we understand how frustrating acne can
                  be, and we're here to help you regain confidence in your skin.
                  Our carefully designed recovery process targets acne at its root
                  while soothing and nourishing your skin for long-term health.
                </p>
              </div>
              <div className={styles.lower_button}>
                <Button>
                  Explore Our Range{" "}
                  <span className={styles.send}>
                    <img src={SendArrow} alt="sendicon" />
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
