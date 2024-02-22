import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Campaign from "~/components/Campaign/Campaign";
import MyNavbar from "~/components/MyNavbar/MyNavbar";
import { fetchCampaignList } from "~/lib/apis/campaign";

export default function MainPage() {
  const [campaignList, setCampaignList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const campaigns = await fetchCampaignList();
      setCampaignList(campaigns);
    };

    fetchData();
  }, []);

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
