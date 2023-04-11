import React from "react";
import Navigation from "../Navigation/Navigation";
import PublicationsCard from "../PublicationsCard/PublicationsCard";
import SideNav from "../SideNav/SideNav";
import "./Publications.css";
const Publications = () => {
  return (
    <div className="body">
      <div className="side">
        <SideNav></SideNav>
      </div>
      <div className="main">
        <Navigation></Navigation>
        <div className="container">
          <p className="section-name">Publications</p>
          <div className="section-underline"></div>
          <div className="row mt-4">
            <PublicationsCard
              title="Silent Speaker: A Lip-reading Model Using Deep Learning"
              description=" In our model, we have tried to recognize speech without the presence or support 
of any auditory signal. We have only used the visual aspect of lip movement to detect the 
word. We have built our own dataset. We tracked the distance between the inner and outer 
lip to extract the features and LSTM is used to train the model. From this model, we got 43% 
accuracy."
              type="Thesis"
              publicationDate="20.11.2020"
            ></PublicationsCard>
            <PublicationsCard
              title="Application of Fuzzy Logic on CT-Scan Images of COVID-19 Patients"
              description="We have used an image classification approach on CT-Scan and X-ray images 
              of COVID-19 patients. We have collected our dataset from multiple sources. Fuzzy c-means 
              and k-means clustering have been used to do the image segmentation. Then for 
              classification, segmented images and raw images are trained using the CNN model. From 
              our observation, we have noticed segmented images perform better than raw images. The 
              f1-score of our model is 91%."
              type="Journal"
              publicationDate="08.09.2021"
              link="https://www.inderscienceonline.com/doi/abs/10.1504/IJIIDS.2021.118561"
            ></PublicationsCard>
            {/* <PublicationsCard></PublicationsCard> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Publications;
