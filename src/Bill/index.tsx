import "./index.scss";
import PMActivity from "../assets/paymentActivity";
import PMMethod from "../assets/paymentMethod";
import PMSelect from "../assets/paymentSelect";
import PopupActivity from "./billComponent/billActivity";
import PopupBillMethod from "./billComponent/billMethod";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { useEffect, useState } from "react";

// import { images } from "../../static/icon";

const PopupBill = () => {
  const [dataBill, setDataBill] = useState();

  const handleGetDataBill = async () => {
    const response = await fetch(
      "https://api-notes-d7z2.onrender.com/api/notes/1975358262742601"
    );
    const data = await response.json();
    data && setDataBill(data);
  };

  useEffect(() => {
    handleGetDataBill();
  }, []);

  return (
    dataBill && (
      <>
        <div className="bill-container">
          <div className="bill-header">Billing & payments</div>
          <div className="bill-body" style={{ height: "100vh" }}>
            <div className="bill-title">
              <div className={"title-tab"}>
                <Tabs>
                  <div className={"tab"}>
                    <TabList className="title-action">
                      <Tab
                        _selected={{
                          color: "#000",
                          bg: "rgb(170 201 255)",
                          borderRadius: "10px",
                          border: "none",
                        }}
                        p={0}
                        style={{
                          width: "185px",
                          outline: "none",
                          color: "#000",
                        }}
                        mb={2}
                        mt={2}
                      >
                        <div className="action-payment flexContent">
                          <PMMethod />
                          <p
                            style={{ paddingLeft: 5 }}
                            className={"payment-title"}
                          >
                            Payment methods
                          </p>
                        </div>
                      </Tab>

                      <Tab
                        _selected={{
                          color: "#000",
                          bg: "rgb(170 201 255)",
                          borderRadius: "10px",
                        }}
                        p={0}
                        style={{ width: "185px", outline: "none" }}
                      >
                        <div className="action-payment flexContent">
                          <PMActivity />
                          <p
                            style={{ paddingLeft: 5 }}
                            className={"payment-title"}
                          >
                            Payment Activity
                          </p>
                        </div>
                      </Tab>

                      <div className="action-activity flexEnd">
                        <PMSelect />
                      </div>
                    </TabList>
                    <TabPanels>
                      <TabPanel style={{ padding: 0 }}>
                        <PopupBillMethod dataBill={dataBill} />
                      </TabPanel>
                      <TabPanel style={{ padding: 0 }}>
                        <PopupActivity dataBill={dataBill} />
                      </TabPanel>
                    </TabPanels>
                  </div>
                </Tabs>
              </div>
            </div>
            <div className="bill-detail"></div>
            <div className="bill-data"></div>
          </div>
        </div>
      </>
    )
  );
};
export default PopupBill;
