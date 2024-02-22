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
  return (
    <Col>
      <Card className="h-100" style={{ border: "none" }}>
        <CardImg src={campaign.photoUrl} alt="..." position="top" />
        <CardBody
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            justifyContent: "space-between",
          }}
        >
          <div>
            <CardTitle
              style={{
                fontSize: "18px",
                fontWeight: "700",
                lineHeight: 1.5,
                color: "#00c4c4",
              }}
            >
              {parseInt(campaign.achievementRate / 10)}% 달성
            </CardTitle>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "4px",
              }}
            >
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
                fontWeight: "500",
              }}
            >
              {campaign.totalBackedAmount}원
            </Badge>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
}
