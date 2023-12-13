import "./index.scss";

/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  Button,
  Select,
  Table,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

const PopupActivity = ({ dataBill }: { dataBill: any }) => {

  function formatDateFromTimestamp(timestamp: any) {
    const date = new Date(timestamp * 1000);

    const day = date.getDate();
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();

    const formattedDate = `${day} ${month} ${year}`;

    return formattedDate;
  }

  return (
    <>
      <div className={"bill-activity-container"}>
        <div className={"activity-title"}>
          <p style={{ fontSize: "20px", fontWeight: 700 }}>Payment activity</p>
        </div>
        <div className={"activity-account content-background"}>
          <Button className={"account-button"}>Ad account</Button>
        </div>
        <div className={"activity-id content-background"}>
          <div className={"id-account"}>
            <p className={"font-down-balance"}>Ad account</p>
            <p
              className={"font-upper-balance"}
              style={{
                fontSize: 20,
                fontWeight: 500,
                color: "rgb(33, 37, 41)",
              }}
            >
              {dataBill.name} ({dataBill.account_id})
            </p>
          </div>
          <div className={"id-threshold"}>
            <div className={"threshold-data"}>
              <p className={"font-down-balance"}>Current balance</p>
              <p className={"data-number font-upper-balance"}>$0.00</p>
            </div>
            <Button className={"threshold-button"} size={"large"}>
              Pay now
            </Button>
          </div>
        </div>
        <div className={"activity-action content-background"}>
          <Select placeholder="Transactions">
            <option value="option1">Transactions</option>
            <option value="option2">Account spending limit</option>
          </Select>
        </div>
        <div className={"activity-transaction content-background"}>
          <TableContainer>
            <Table
              variant="simple"
              __css={{ "table-layout": "fixed", width: "full" }}
            >
              <Thead>
                <Tr>
                  <Th
                    className={"font-upper-balance"}
                    style={{
                      paddingLeft: "-10px",
                      fontSize: 16,
                      fontWeight: "700",
                      color: "rgb(0, 0, 0)",
                    }}
                  >
                    Transaction ID
                  </Th>
                  <Th
                    className={"font-upper-balance"}
                    style={{
                      paddingLeft: "-10px",
                      fontSize: 16,
                      fontWeight: "700",
                      color: "rgb(0, 0, 0)",
                    }}
                  >
                    Date
                  </Th>
                  <Th
                    className={"font-upper-balance"}
                    style={{
                      fontSize: 16,
                      fontWeight: "700",
                      color: "rgb(0, 0, 0)",
                    }}
                  >
                    Amount
                  </Th>
                  <Th
                    className={"font-upper-balance"}
                    style={{
                      fontSize: 16,
                      fontWeight: "700",
                      color: "rgb(0, 0, 0)",
                    }}
                  >
                    Payment method
                  </Th>
                  <Th
                    className={"font-upper-balance"}
                    style={{
                      fontSize: 16,
                      fontWeight: "700",
                      color: "rgb(0, 0, 0)",
                    }}
                  >
                    VAT invoice ID
                  </Th>
                  <Th
                    className={"font-upper-balance"}
                    style={{
                      fontSize: 16,
                      fontWeight: "700",
                      color: "rgb(0, 0, 0)",
                    }}
                  >
                    Payment status
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {dataBill.allBilling.map((item: any) => (
                  <Tr>
                    <Th
                      className={"font-down-balance"}
                      style={{
                        fontWeight: "400",
                        color: "rgba(20,97,204,1)",
                        fontSize: 13,
                      }}
                    >
                      {item.id}
                    </Th>
                    <Th
                      style={{
                        fontWeight: "400",
                        fontSize: 13,
                        color: "rgb(0, 0, 0)",
                      }}
                    >
                      {formatDateFromTimestamp(item.transaction_time)}
                    </Th>
                    <Th
                      style={{
                        fontWeight: "400",
                        fontSize: 13,
                        color: "rgb(0, 0, 0)",
                      }}
                    >
                      {item.formatted_amount}
                    </Th>
                    <Th style={{ fontWeight: "400", fontSize: 13 }}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "flexStart",
                          alignItems: "center",
                        }}
                      >
                        <img
                          src={item.payment_method_icon}
                          style={{
                            width: "30px",
                            height: "20px",
                            paddingRight: "2px",
                          }}
                        />
                        <div>
                          <p>{item.payment_method_label}</p>
                          <p>{item.tracking_id}</p>
                        </div>
                      </div>
                    </Th>
                    <Th
                      className={"font-down-balance"}
                      style={{ fontWeight: "400", fontSize: 13 }}
                    >
                      {item.vat_invoice_id}
                    </Th>
                    <Th style={{ fontWeight: "500" }}>
                      <span
                        className={
                          item.formatted_payment_status === "Paid"
                            ? "background-paid"
                            : "background-fail"
                        }
                      >
                        {item.formatted_payment_status}
                      </span>
                    </Th>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </>
  );
};
export default PopupActivity;
