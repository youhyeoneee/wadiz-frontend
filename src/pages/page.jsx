import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Campaign from "~/components/Campaign/Campaign";
import MyNavbar from "~/components/MyNavbar/MyNavbar";

export default function MainPage() {
  const [campaignList, setCampaignList] = useState([
    {
      img: "https://cdn1.wadiz.kr/images/20240214/1707890500517.png/wadiz/optimize",
      title:
        "[하루 15분] 무의식 브레인 해킹 영어! 나이 상관없이 영어뇌 장착하기",
      nickName: "블래어",
      achievementRate: 23161,
      totalBackedAmount: 115805000,
    },
  ]);
  return (
    <>
      <div>
        <Row className="row-cols-1 row-cols-md-4 g-4">
          {campaignList.map((campaign) => (
            <Campaign campaign={campaign} key={campaign.title} />
          ))}
        </Row>
      </div>
    </>
  );
}
