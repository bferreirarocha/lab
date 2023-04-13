import React, { createContext } from "react";
import { useState } from "react";
import { BuddyProductInfo, Price } from "../types/BuddyProduct";
import { ContextProductInfo, ProductInfo } from "../types/Product";

type InfoType = {
  firstName: string;
  lastName: string;
  email: string;
  addressLine1: string;
  addressLine2: string;
  zipCode: string;
  city: string;
  state: string;
  phoneNumber: string;
};

// Inital state
export const OrderContext = createContext({
  items: [] as ContextProductInfo[],
  currentStep: 1,
  shippingInfo: {
    firstName: "",
    lastName: "",
    email: "",
    addressLine1: "",
    addressLine2: "",
    zipCode: "",
    city: "",
    state: "",
    phoneNumber: "",
  },
  showErrors: false,
  infoHandler: (payload: InfoType) => {},
  itemsHandler: (
    id: number,
    action: string,
    productInfo?: BuddyProductInfo | ProductInfo
  ) => {},
  stepsHandler: (action: string) => {},
  showErrorsToggle: () => {},
});

const OrderContextProvider: React.FC<{ children: React.ReactElement }> = ({
  children,
}) => {
  const [items, setItems] = useState<ContextProductInfo[]>([]);
  const [currentStep, setCurrentStep] = useState(1);
  const [showErrors, setShowErrors] = useState(false);
  const [shippingInfo, setShippingInfo] = useState<InfoType>({
    firstName: "",
    lastName: "",
    addressLine1: "",
    addressLine2: "",
    zipCode: "",
    city: "",
    state: "",
    phoneNumber: "",
    email: "",
  });
  const itemsHandler = (
    id: number,
    action: string,
    productInfo?: BuddyProductInfo | ProductInfo
  ) => {
    if (action === "add") {
      if (productInfo) {
        const currentItem = items.find(
          (item) => item.asin === productInfo.asin
        ); // Trova l'elemento
        if (currentItem) {
          const newItems = [...items];
          const index = items.indexOf(currentItem); // trova la posizione dell'elemento
          const quantity = newItems[index].quantity + 1; // incrementa  dell'elemento

          newItems[index] = { ...newItems[index], quantity: quantity }; // inserisci solo la modifica efettuata all'intenro dell'oggetto
          setItems(newItems);
        } else {
          //  ritorna la lista degli elementi che esistono già
          const newItems = [
            items,
            {
              id: id,
              quantity: 1,
              price: null,
              symbol: (productInfo as BuddyProductInfo).price.symbol,
              image: productInfo.main_image,
              title: productInfo.title,
              url: (productInfo as BuddyProductInfo).url,
              asin: productInfo.asin,
            },
          ].flat();
          setItems(newItems);
        }
      }
    } else if (action === "remove") {
      const currentItem = items.find((item) => item.id === id)!;
      const index = items.indexOf(currentItem);
      const quantity = items[index].quantity - 1;

      if (quantity > 0) {
        const newItems = [...items];
        newItems[index] = { ...newItems[index], quantity: quantity };

        setItems(newItems);
      } else {
        const newItems = items
          .filter((el: ContextProductInfo) => el.id !== id)
          .map((el: ContextProductInfo, i) => {
            return { ...el, id: i + 1 };
          });
        setItems(newItems);
      }
    } else {
      setItems([]);
    }
  };

  const stepsHandler = (action: string) => {
    if (action === "increase") {
      setCurrentStep((step) => step + 1);
    } else if (action === "decrease") {
      setCurrentStep((step) => step - 1);
    } else {
      setCurrentStep(1);
    }
  };
  const infoHandler = (payload: InfoType) => {
    setShippingInfo(payload);
  };
  const showErrorsToggle = () => {
    setShowErrors((prev) => !prev);
  };

  const store = {
    items: items,
    currentStep: currentStep,
    shippingInfo: shippingInfo,
    showErrors: showErrors,
    infoHandler: infoHandler,
    itemsHandler: itemsHandler,
    stepsHandler: stepsHandler,
    showErrorsToggle: showErrorsToggle,
  };

  return (
    <OrderContext.Provider value={store}>{children}</OrderContext.Provider>
  );
};

export default OrderContextProvider;
