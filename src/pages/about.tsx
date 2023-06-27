// pages/acc.tsx
import React from "react";
import Nav from "../components/Nav";
// import "./_App.css";
// import "./about.css";

const AccPage: React.FC = () => {
  return (
    <div>
      <>
        <h1>WELCOME to the Inclusive Alphabet Project!</h1>

        <p className="ContentNav">Inclusive Alphabet Landing Page</p>

        <br />

        <>Team Members</>
        <br></br>
        <div className="ContentText">Annepse Blanchard</div>
        <div className="ContentText">Karen Petersen</div>

        <div className="ContentText">Donald Mains</div>

        <div className="ContentText">Scott Hansford</div>

        <h2 className="ContentTextTitle">About this Project!</h2>

        <p className="ContentText">
          {" "}
          Dyslexic people see ANS differently than most people. Our team project
          is to provide a way for people with dyslexia to create their own
          "language", and be able to translate it to and from the English
          language that is seen by people without dyslexia. The intent is to
          build one or more dyslexic databases of fonts and words that can be
          used in the future to help dyslexic users read and write in English on
          their own terms (include them as the individuals they are and how they
          see). This repository will provide a website that allows a user to
          create a personalized font set of English ANS as the each user
          actually see's them, hence creating one or more new dyslexic ANS data
          sets, similar to creating a new language that can be translated to
          other languages. Initially, the user will create a dataset (font set)
          of each ANS that will be mapped to the keyboard key id's. This will be
          done by selecting from pre-set options provided for each ANS. These
          options are created from a manually created ANS font set that displays
          each unique ANS in multiple ways that many dyslexic people may
          identify with from one of the options. Once the user ANS font set has
          been completed the ANS font set will be reflected on the display as
          the user types. The user will be able to turn on/off an option to view
          the generally accepted view of an English ANS set under their font set
          so they can see the differences or similarities. Another feature will
          include the ability to save words in their ANS font set, with optional
          definition for the word, and can link an image of the word, that can
          be saved database, creating their own dictionary/encyclopedia. Add,
          update and delete options will be provided for this database. Stretch
          Goals: Provide the ability to download a text file in the generally
          viewed English font set (like a book), and translate it for viewing in
          the users specific ANS font set. Provide the ability to save a text
          file using the user's ANS font set. Provide the ability to translate a
          file saved in the user's ANS font set to the generally accepted
          English font set. Provide the ability to display a usable keyboard
          that displays with the user's specific font (tablet, touchscreen
          laptop, Android phone and/or IOS). Provide an option for the user to
          write their own interpretation of an ANS using a laptop touch screen
          or stylist on an Android phone.
        </p>
      </>
    </div>
  );
};

export default AccPage;
