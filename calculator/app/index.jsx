import React, { useState, useEffect } from "react";
import { FlatList, Modal, Text, TouchableOpacity, View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";

SplashScreen.preventAutoHideAsync();

export default function Index() {
  const [loaded, error] = useFonts({
    Ndot: require("../assets/fonts/ndot-45.ttf"),
  });

  const [displayValue, setDisplayValue] = useState("0");
  const [operator, setOperator] = useState(null);
  const [firstValue, setFirstValue] = useState("");
  const [history, setHistory] = useState([]);
  const [isHistoryVisible, setIsHistoryVisible] = useState(false);

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  const handleNumberInput = (num) => {
    if (displayValue === "0") {
      setDisplayValue(num.toString());
    } else {
      setDisplayValue(displayValue + num);
    }
  };

  const handleOperatorInput = (operator) => {
    setOperator(operator);
    setFirstValue(displayValue);
    setDisplayValue("0");
  };

  const handleEqual = () => {
    const num1 = parseFloat(firstValue);
    const num2 = parseFloat(displayValue);
    let result = "";

    if (operator === "+") {
      result = (num1 + num2).toString();
    } else if (operator === "-") {
      result = (num1 - num2).toString();
    } else if (operator === "*") {
      result = (num1 * num2).toString();
    } else if (operator === "/") {
      result = (num1 / num2).toString();
    }

    // Update history
    setHistory([
      ...history,
      { expression: `${firstValue} ${operator} ${displayValue}`, result },
    ]);

    setDisplayValue(result);
    setOperator(null);
    setFirstValue("");
  };

  const handleClear = () => {
    setDisplayValue("0");
    setOperator(null);
    setFirstValue("");
  };

  const renderHistoryItem = ({ item }) => (
    <View
      style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: "#ccc" }}
    >
      <Text style={{ color: "#ffffff", fontSize: 34 }}>
        {item.expression} = {item.result}
      </Text>
    </View>
  );

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000000",
      }}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <View
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "flex-end",
            marginRight: 10,
            top: 50,
            right: 20,
            position: "absolute",
          }}
        >
          <TouchableOpacity
            onPress={() => setIsHistoryVisible(!isHistoryVisible)}
          >
            <MaterialIcons name="history-toggle-off" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "flex-end",
            marginRight: 30,
          }}
        >
          <Text
            style={{
              color: "#ffffff",
              fontSize: 30,
              fontFamily: "Ndot",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-end",
            }}
          >
            {displayValue}
          </Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 50,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 20,
            marginBottom: 30,
          }}
        >
          <TouchableOpacity
            style={{
              width: 70,
              height: 70,
              backgroundColor: "#333333",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 50,
            }}
            onPress={() => handleClear()}
          >
            <Text
              style={{
                color: "#ffffff",
                fontSize: 21,
                textAlign: "center",
              }}
            >
              AC
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 70,
              height: 70,
              backgroundColor: "#333333",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 50,
            }}
          >
            <Text
              style={{
                color: "#ffffff",
                fontSize: 21,
                textAlign: "center",
              }}
            >
              ( )
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 70,
              height: 70,
              backgroundColor: "#333333",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 50,
            }}
          >
            <Text
              style={{
                color: "#ffffff",
                fontSize: 21,
                textAlign: "center",
              }}
            >
              %
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 70,
              height: 70,
              backgroundColor: "#333333",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 50,
            }}
          >
            <Text
              style={{
                color: "#ffffff",
                fontSize: 21,
                textAlign: "center",
              }}
            >
              √
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 20,
            marginBottom: 30,
          }}
        >
          <TouchableOpacity
            style={{
              width: 60,
              height: 60,
              backgroundColor: "#000000",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 30,
            }}
            onPress={() => handleNumberInput(7)}
          >
            <Text
              style={{
                color: "#ffffff",
                fontSize: 21,
                fontFamily: "Ndot",
                textAlign: "center",
              }}
            >
              7
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 60,
              height: 60,
              backgroundColor: "#000000",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 30,
            }}
            onPress={() => handleNumberInput(8)}
          >
            <Text
              style={{
                color: "#ffffff",
                fontSize: 21,
                fontFamily: "Ndot",
                textAlign: "center",
              }}
            >
              8
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 60,
              height: 60,
              backgroundColor: "#000000",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 30,
            }}
            onPress={() => handleNumberInput(9)}
          >
            <Text
              style={{
                color: "#ffffff",
                fontSize: 21,
                fontFamily: "Ndot",
                textAlign: "center",
              }}
            >
              9
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 90,
              height: 60,
              backgroundColor: "#d93434",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 30,
            }}
            onPress={() => handleOperatorInput("/")}
          >
            <Text
              style={{
                color: "#ffffff",
                fontSize: 27,
                fontFamily: "Ndot",
                textAlign: "center",
              }}
            >
              ÷
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 20,
            marginBottom: 30,
          }}
        >
          <TouchableOpacity
            style={{
              width: 60,
              height: 60,
              backgroundColor: "#000000",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 30,
            }}
            onPress={() => handleNumberInput(4)}
          >
            <Text
              style={{
                color: "#ffffff",
                fontSize: 21,
                fontFamily: "Ndot",
                textAlign: "center",
              }}
            >
              4
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 60,
              height: 60,
              backgroundColor: "#000000",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 30,
            }}
            onPress={() => handleNumberInput(5)}
          >
            <Text
              style={{
                color: "#ffffff",
                fontSize: 21,
                fontFamily: "Ndot",
                textAlign: "center",
              }}
            >
              5
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 60,
              height: 60,
              backgroundColor: "#000000",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 30,
            }}
            onPress={() => handleNumberInput(6)}
          >
            <Text
              style={{
                color: "#ffffff",
                fontSize: 21,
                fontFamily: "Ndot",
                textAlign: "center",
              }}
            >
              6
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 90,
              height: 60,
              backgroundColor: "#d93434",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 30,
            }}
            onPress={() => handleOperatorInput("*")}
          >
            <Text
              style={{
                color: "#ffffff",
                fontSize: 27,
                fontFamily: "Ndot",
                textAlign: "center",
              }}
            >
              ×
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 20,
            marginBottom: 30,
          }}
        >
          <TouchableOpacity
            style={{
              width: 60,
              height: 60,
              backgroundColor: "#000000",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 30,
            }}
            onPress={() => handleNumberInput(1)}
          >
            <Text
              style={{
                color: "#ffffff",
                fontSize: 21,
                fontFamily: "Ndot",
                textAlign: "center",
              }}
            >
              1
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 60,
              height: 60,
              backgroundColor: "#000000",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 30,
            }}
            onPress={() => handleNumberInput(2)}
          >
            <Text
              style={{
                color: "#ffffff",
                fontSize: 21,
                fontFamily: "Ndot",
                textAlign: "center",
              }}
            >
              2
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 60,
              height: 60,
              backgroundColor: "#000000",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 30,
            }}
            onPress={() => handleNumberInput(3)}
          >
            <Text
              style={{
                color: "#ffffff",
                fontSize: 21,
                fontFamily: "Ndot",
                textAlign: "center",
              }}
            >
              3
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 90,
              height: 60,
              backgroundColor: "#d93434",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 30,
            }}
            onPress={() => handleOperatorInput("+")}
          >
            <Text
              style={{
                color: "#ffffff",
                fontSize: 27,
                fontFamily: "Ndot",
                textAlign: "center",
              }}
            >
              +
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 20,
            marginBottom: 30,
          }}
        >
          <TouchableOpacity
            style={{
              width: 60,
              height: 60,
              backgroundColor: "#000000",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 30,
            }}
            onPress={() => handleNumberInput(0o0)}
          >
            <Text
              style={{
                color: "#ffffff",
                fontSize: 21,
                fontFamily: "Ndot",
                textAlign: "center",
              }}
            >
              00
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 60,
              height: 60,
              backgroundColor: "#000000",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 30,
            }}
            onPress={() => handleNumberInput(0)}
          >
            <Text
              style={{
                color: "#ffffff",
                fontSize: 21,
                fontFamily: "Ndot",
                textAlign: "center",
              }}
            >
              0
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 60,
              height: 60,
              backgroundColor: "#000000",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 30,
            }}
            onPress={() => handleOperatorInput(".")}
          >
            <Text
              style={{
                color: "#ffffff",
                fontSize: 21,
                fontFamily: "Ndot",
                textAlign: "center",
              }}
            >
              .
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 90,
              height: 60,
              backgroundColor: "#d93434",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 30,
            }}
            onPress={() => handleEqual()}
          >
            <Text
              style={{
                color: "#ffffff",
                fontSize: 27,
                fontFamily: "Ndot",
                textAlign: "center",
              }}
            >
              =
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <Modal
        visible={isHistoryVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setIsHistoryVisible(false)}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              height: "100%",
              backgroundColor: "#000",
              padding: 20,
              borderRadius: 10,
              width: "100%",
              display: "flex",
              gap: 20,
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 50,
              }}
            >
              <Text style={{ color: "#ffffff", fontSize: 25 }}>History</Text>
              <TouchableOpacity
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 50,
                  backgroundColor: "#d93434",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onPress={() => setIsHistoryVisible(false)}
              >
                <AntDesign name="close" size={30} color="white" />
              </TouchableOpacity>
            </View>
            <View></View>

            <FlatList
              data={history}
              keyExtractor={(item, index) => index.toString()}
              renderItem={renderHistoryItem}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}
