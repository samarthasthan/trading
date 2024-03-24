import styles from "./MainHeader.module.css";
import SimpleButton from "../../buttons/SimpleButton";
import TextInput from "../../inputs/textInput/TextInput";
import React from "react";
function MainHeader() {
  return (
    <div className={styles.mainHeader}>
      <div className={styles.options}>
        <SimpleButton
          backgroundColor="var(--white-color)"
          color="var(--black--color)"
        >
          Trading View
        </SimpleButton>

        <ul className={styles.tabs}>
          <li>Market</li>
          <li>Watchlist</li>
          <li>Portfolio</li>
          <li>Learn</li>
        </ul>
      </div>

      <div className={styles.user}>
        <TextInput>Search Stock...</TextInput>
        <img
          src="https://cdnstorage.sendbig.com/unreal/female.webp"
          alt="user"
          srcset=""
          className={styles.profilePicture}
        />
      </div>
    </div>
  );
}

export default MainHeader;
