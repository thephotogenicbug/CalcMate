import React, { useState, useEffect } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
SplashScreen.preventAutoHideAsync();

export default function Index() {
  const [loaded, error] = useFonts({
    Ndot: require("../assets/fonts/ndot-45.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  const [displayValue, setDisplayValue] = useState("0");
  const [operator, setOperator] = useState(null);
  const [firstValue, setFirstValue] = useState("");

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

    if (operator === "+") {
      setDisplayValue((num1 + num2).toString());
    } else if (operator === "-") {
      setDisplayValue((num1 - num2).toString());
    } else if (operator === "*") {
      setDisplayValue((num1 * num2).toString());
    } else if (operator === "/") {
      setDisplayValue((num1 / num2).toString());
    }

    setOperator(null);
    setFirstValue("");
  };

  const handleClear = () => {
    setDisplayValue("0");
    setOperator(null);
    setFirstValue("");
  };

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
          <TouchableOpacity>
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
    </View>
  );
}
