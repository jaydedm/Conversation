import { ReactElement } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import StarIcon from "@mui/icons-material/Star";
import "react-vertical-timeline-component/style.min.css";
import { HistoryCard } from "../../components/History/HistoryCard";

export const History = (): ReactElement => {
  return (
    <>
      <div style={{ height: "76vh", marginTop: '8vh' }}>
        <p>Our History!</p>
        <p>
          <img src={process.env.PUBLIC_URL + "/img/History.png"}  style={{height: '72vh'}}/>
        </p>
      </div>
      <VerticalTimeline lineColor="black">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ color: "#fff", boxShadow: "0px 0px 0px red" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2011 - present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<StarIcon />}
        >
          {HistoryCard({ name: "Kamas: 1914", description: "This building was built by Billy Reeve to win the heart of his wife, Molly Black", price: "123" })}
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2010 - 2011"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<StarIcon />}
        >
          {HistoryCard({ name: "Test", description: "Test", price: "123" })}
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2008 - 2010"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<StarIcon />}
        >
          {HistoryCard({ name: "Test", description: "Test", price: "123" })}
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="my-test-class"
          date="2006 - 2008"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<StarIcon />}
        >
          {HistoryCard({ name: "Test", description: "Test", price: "123" })}
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="April 2013"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<StarIcon />}
        >
          {HistoryCard({ name: "Test", description: "Test", price: "123" })}
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2002 - 2006"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<StarIcon />}
        >
          {HistoryCard({ name: "Test", description: "Test", price: "123" })}
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2002 - 2006"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<StarIcon />}
        >
          {HistoryCard({ name: "Test", description: "Test", price: "123" })}
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </>
  );
};
