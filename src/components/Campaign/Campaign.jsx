import React from "react";
import {
  Badge,
  Card,
  CardBody,
  CardFooter,
  CardImg,
  CardText,
  CardTitle,
  Col,
  Container,
} from "react-bootstrap";

export default function Campaign({ campaign }) {
  const formatLargeNumber = (n) => {
    if (n < 1e3) return n.toLocaleString("ko-KR");
    if (n >= 1e3 && n < 1e4)
      return Math.floor(n / 1e3).toLocaleString("ko-KR") + "천";
    if (n >= 1e4 && n < 1e8)
      return Math.floor(n / 1e4).toLocaleString("ko-KR") + "만";
    if (n >= 1e8 && n < 1e12)
      return (Math.floor((n * 10) / 1e8) / 10).toLocaleString("ko-KR") + "억";
    if (n >= 1e12) return +(n / 1e12).toFixed(1).toLocaleString("ko-KR") + "조";
  };

  return (
    <Col>
      <Card
        className="h-100"
        style={{
          border: "none",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        <CardImg src={campaign.photoUrl} alt="..." position="top" />
        <CardBody
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            justifyContent: "space-between",
            padding: "0",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "4px",
            }}
          >
            <CardTitle
              style={{
                marginBottom: "0",
                fontSize: "18px",
                fontWeight: "700",
                lineHeight: 1.5,
                color: "#00c4c4",
              }}
            >
              {campaign.achievementRate.toLocaleString("ko-KR")} 달성
            </CardTitle>
            <CardText
              as="div"
              style={{
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: 1.5,
              }}
            >
              {campaign.title}
            </CardText>
            <CardText
              style={{
                fontSize: "12px",
                fontWeight: "400",
                lineHeight: "1.5",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                margin: "0",
                color: "#868e96",
              }}
            >
              {campaign.nickName}
            </CardText>
          </div>
          <div
            style={{
              border: "none",
              backgroundColor: "#ffffff",
            }}
          >
            <Badge
              bg="#868e96"
              style={{
                border: "solid 1px #f2f4f6",
                backgroundColor: "#f2f4f6",
                color: "#495057",
                fontSize: "10px",
                fontWeight: "500",
              }}
            >
              {formatLargeNumber(campaign.totalBackedAmount)} 원+
            </Badge>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
}
