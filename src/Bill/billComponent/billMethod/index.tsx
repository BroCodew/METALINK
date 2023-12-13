import "./index.scss";
import { Table, TableContainer, Tbody, Th, Thead, Tr } from "@chakra-ui/react";
import { images } from "../../../assets/images";

/* eslint-disable @typescript-eslint/no-explicit-any */

const PopupBillMethod = (props: any) => {
  const { dataBill } = props;

  function formatCurrency(amount: any) {
    const roundedAmount = Math.round(amount * 100) / 100;
    const formattedAmount = roundedAmount.toFixed(2);

    // Sử dụng biểu thức chính quy để thêm dấu phẩy cho phần nghìn
    const numberWithCommas = formattedAmount.replace(
      /\B(?=(\d{3})+(?!\d))/g,
      ","
    );

    return `${numberWithCommas} $`;
  }

  function formatCurrencyNoDola(amount: any) {
    const roundedAmount = Math.round(amount * 100) / 100;
    const formattedAmount = roundedAmount.toFixed(2);

    // Sử dụng biểu thức chính quy để thêm dấu phẩy cho phần nghìn
    const numberWithCommas = formattedAmount.replace(
      /\B(?=(\d{3})+(?!\d))/g,
      ","
    );

    return `$${numberWithCommas}`;
  }

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

  function formatDateString(inputDateString: any) {
    const inputDate = new Date(inputDateString);

    const day = inputDate.getDate();
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
    const month = monthNames[inputDate.getMonth()];
    const year = inputDate.getFullYear();

    const formattedDate = `${day} ${month} ${year}`;

    return formattedDate;
  }

  return (
    dataBill && (
      <>
        <div className={"bill-method-container"}>
          <div className={"method-left"}>
            <div className={"method-title "}>
              <p>{dataBill.name}</p>
            </div>
            <div className={"method-balance"}>
              <div className={"balance-content"}>
                <p className={"content-title font-upper-balance "}>
                  Current balance
                </p>
                <p className={"content-number font-upper-balance"}>$0.00</p>
                <p className={"content-due font-down-balance"}>
                  No payment due at this time.
                </p>
                <div className={"content-pay"}>
                  <p className={"pay-title font-upper-balance"}>
                    When you'll pay
                  </p>
                  <div className={"pay-content"}>
                    <div className={"content-threshold"}>
                      <p className={"threshold-number font-upper-balance"}>
                        {formatCurrencyNoDola(dataBill.h_threshold)}
                      </p>
                      <p className={"threshold-number font-down-balance"}>
                        Payment threshold
                      </p>
                    </div>
                    <p className={"content-text font-down-balance"}>and</p>
                    <div className={"content-time"}>
                      <p className={"time-date font-upper-balance"}>
                        {formatDateString(dataBill.next_bill_date)}
                      </p>
                      <p className={"time-text font-down-balance"}>
                        Monthly billing date
                      </p>
                    </div>
                  </div>
                </div>
                <div className={"content-limit"}>
                  <p className={"limit-desc font-down-balance"}>
                    Daily spending limit (set by Meta):{" "}
                    <span className={"desc-number font-upper-balance"}>
                      {formatCurrency(dataBill.s_adtrust_new)}
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className={"method-fund content-background"}>
              <p className={"fund-title font-upper-balance"}>Prepaid funds</p>
              <p className={"fund-desc font-down-balance"}>
                Add prepaid funds to pay for ads in advance. We'll deduct from
                prepaid funds first before charging any payment methods with
                automatic billing turned on.
              </p>
            </div>
            <div className={"method-credit content-background"}>
              <p className={"credit-title font-upper-balance"}>Ad credits</p>
              <div className={"credit-total"}>
                <img src={images.ADCredit} />
                <span className={"font-upper-balance"}>$0.00</span>
              </div>
            </div>
            <div
              className={"method-payment content-background"}
              style={{ paddingBottom: 25 }}
            >
              <p className={"font-upper-balance"}>Payment methods</p>
            </div>
            <div className={"method-limit content-background"}>
              <p
                className={"limit-content font-upper-balance"}
                style={{ paddingBottom: 15 }}
              >
                Account spending limit
              </p>
              <p
                className={"limit-text font-down-balance"}
                style={{ fontSize: 13 }}
              >
                Control your total ad costs by setting an account spending
                limit. Ads will pause if you reach your limit and won't run
                again unless you change it.
                <a
                  style={{
                    color: "#0D6EFD",
                    textDecoration: "underline",
                    fontSize: 13,
                    fontWeight: 400,
                  }}
                >
                  Learn more about account spending limits
                </a>
              </p>
            </div>
            <div className={"method-activity content-background"}>
              <p className={"activity-title font-upper-balance"}>
                Payment activity
              </p>
              <TableContainer>
                <Table variant="simple" ml={"-14px"}>
                  <Thead>
                    <Tr>
                      <Th
                        className={"font-upper-balance"}
                        style={{
                          paddingLeft: "-10px",
                          fontSize: 16,
                          fontWeight: 700,
                          color: "rgb(0, 0, 0)",
                          textTransform: "none",
                        }}
                      >
                        Date
                      </Th>
                      <Th
                        className={"font-upper-balance"}
                        style={{
                          fontSize: 16,
                          fontWeight: 700,
                          color: "#000",
                          textTransform: "none",
                        }}
                      >
                        Payment method
                      </Th>
                      <Th
                        className={"font-upper-balance"}
                        style={{
                          fontSize: 16,
                          fontWeight: 700,
                          color: "#000",
                          textTransform: "none",
                        }}
                      >
                        Amount
                      </Th>
                      <Th
                        className={"font-upper-balance"}
                        style={{
                          fontSize: 16,
                          fontWeight: 700,
                          color: "rgb(0, 0, 0)",
                          textTransform: "none",
                        }}
                      >
                        Status
                      </Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {dataBill.billingLastTime.map((item: any) => (
                      <Tr>
                        <Th
                          style={{ textTransform: "none" }}
                          fontSize={"16px"}
                          fontWeight={"400"}
                          color={"#000"}
                        >
                          {formatDateFromTimestamp(item.transaction_time)}
                        </Th>
                        <Th
                          fontSize={"16px"}
                          fontWeight={"400"}
                          color={"#000"}
                          style={{ textTransform: "none" }}
                        >
                          {item.payment_method_label}
                        </Th>
                        <Th fontSize={"16px"} fontWeight={"400"} color={"#000"}>
                          {item.total_amount}
                        </Th>
                        <Th>
                          <span
                            className={
                              item.formatted_payment_status === "Paid"
                                ? "background-paid"
                                : "background-fail"
                            }
                            style={{ textTransform: "none" }}
                          >
                            {item.formatted_payment_status}
                          </span>
                        </Th>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              </TableContainer>
              <p className={"activity-click font-upper-balance"}>
                CLICK VÀO ĐÂY ĐỂ XEM BILL
              </p>
            </div>
            <div className={"method-info content-background"}>
              <p className={"info-title font-upper-balance"}>Business info</p>
              <div className={"info-data"}>
                <p className={"font-upper-balance"}>Business name</p>
                <p className={"font-upper-balance"}>Address</p>
                <p className={"font-upper-balance"}>Currency</p>
              </div>
              <p className={"font-upper-balance"}>_</p>
              <p className={"info-tax font-upper-balance"}>Tax ID</p>
              <p className={"font-upper-balance"}>_</p>
            </div>
          </div>
          <div
            className={"method-right content-background"}
            style={{ marginTop: 27 }}
          >
            <div className={"flex-content"}>
              <div className={"flex-icon"}>
                <img src={images.Status} />
                <p className={"font-right-key"}>Trạng Thái</p>
              </div>
              <p className={"font-right-key"}>{dataBill.s_status}</p>
            </div>
            <div className={"method-ID flex-content"}>
              <div className={"flex-icon"}>
                <img src={images.ID} style={{ marginLeft: "-3px" }} />
                <p className={"font-right-key"}>ID</p>
              </div>

              <p className={"font-right-key"}>{dataBill.account_id}</p>
            </div>
            <div className={"method-name flex-content"}>
              <div className={"flex-icon"}>
                <img src={images.Name_TK} />
                <p className={"font-right-key"}>Tên TK</p>
              </div>

              <p className={"font-right-key"}>{dataBill.s_name}</p>
            </div>
            <div className={"method-name flex-content"}>
              <div className={"flex-icon"}>
                <img src={images.Debt} />
                <p className={"font-right-key"}>Dư nợ</p>
              </div>
              <div className={"flex-value"}>
                <p className={"backGround-blue"}>{dataBill.h_balance} USD</p>
                <p className={"backGround-green"}>{dataBill.s_balance} $</p>
              </div>
            </div>
            <div className={"method-name flex-content"}>
              <div className={"flex-icon"}>
                <img src={images.ThresHold} />
                <p className={"font-right-key"}>Ngưỡng</p>
              </div>
              <div className={"flex-value"}>
                <p className={"backGround-blue"}>{dataBill.h_threshold} USD</p>
                <p className={"backGround-green"}>{dataBill.s_threshold} $</p>
              </div>
            </div>
            <div className={"method-name flex-content"}>
              <div className={"flex-icon"}>
                <img src={images.Limit_day} />
                <p className={"font-right-key"}>Limit ngày</p>
              </div>
              <div className={"flex-value"}>
                <p className={"backGround-blue"}>{dataBill.h_adtrust} </p>
                <p className={"backGround-green"}>{dataBill.s_adtrust}</p>
              </div>
            </div>
            <div className={"method-name flex-content"}>
              <div className={"flex-icon"}>
                <img src={images.Limit} />
                <p className={"font-right-key"}>Limit</p>
              </div>
              <div className={"flex-value"}>
                <p className={"backGround-pink"}>
                  {dataBill.h_adtrust_new} USD
                </p>
                <p className={"backGround-green"}>{dataBill.s_adtrust_new} $</p>
              </div>
            </div>
            <div className={"method-name flex-content"}>
              <div className={"flex-icon"}>
                <img src={images.Spend} />
                <p className={"font-right-key"}> Chi tiêu</p>
              </div>
              <div className={"flex-value"}>
                <p className={"backGround-blue"}>{dataBill.h_spent} USD</p>
                <p className={"backGround-green"}>{dataBill.s_spent} $</p>
              </div>
            </div>
            <div className={"method-name flex-content"}>
              <div className={"flex-icon"}>
                <img src={images.Admin} />
                <p className={"font-right-key"}>Admin</p>
              </div>
              <p className={"font-right-key"}>{dataBill.s_admin}</p>
            </div>
            <div className={"method-name flex-content"}>
              <div className={"flex-icon"}>
                <img src={images.Spend} />
                <p className={"font-right-key"}> Tiền tệ</p>
              </div>
              <p className={"font-right-key"}>{dataBill.s_currency}</p>
            </div>
            <div className={"method-name flex-content"}>
              <div className={"flex-icon"}>
                <img src={images.TypeOfAccount} />
                <p className={"font-right-key"}>Loại TK</p>
              </div>
              <p className={"font-right-key"}>{dataBill.s_acctype}</p>
            </div>
            <div className={"method-name flex-content"}>
              <div className={"flex-icon"}>
                <img src={images.Create_day} />
                <p className={"font-right-key"}>Ngày tạo</p>
              </div>
              <p className={"font-right-key"}>{dataBill.s_created_time}</p>
            </div>
            <div className={"method-name flex-content"}>
              <div className={"flex-icon"}>
                <img src={images.Time_zone} />
                <p className={"font-right-key"}>Múi giờ</p>
              </div>
              <p className={"font-right-key"}>{dataBill.s_timezone}</p>
            </div>
            <div className={"method-name flex-content"}>
              <div className={"flex-icon"}>
                <img src={images.Permission} />
                <p className={"font-right-key"}>Quyền</p>
              </div>
              <p className={"font-right-key"}>{dataBill.s_role}</p>
            </div>
          </div>
        </div>
      </>
    )
  );
};
export default PopupBillMethod;
