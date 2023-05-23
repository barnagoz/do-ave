import { useState } from "react";
import { Inter } from "next/font/google";
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [selectedDay, setSelectedDay] = useState(0);
  return (
    <Flex
      w="100%"
      minH="100vh"
      backgroundSize={"cover"}
      backgroundImage={`url(/Wave.svg)`}
      backgroundPosition={"center"}
      backgroundRepeat={"no-repeat"}
      direction={"column"}
      align={"center"}
    >
      <Flex w="100%" h={"15vh"} p={2} align={"center"}>
        <Image src={"/api.hatternelkul.PNG"} width={100} height={100} />
        <Image
          src={"/IMG_3779.PNG"}
          width={110}
          height={100}
          style={{ marginLeft: "-10px" }}
        />
        <Image src={"/ejg.fekete.hatternelkul.PNG"} width={100} height={100} />
        <Heading marginLeft={4} textColor={"white"}>
          AVE Napok 2023
        </Heading>
      </Flex>
      <Flex
        w="95%"
        minH={"82vh"}
        rounded={"lg"}
        direction={"row"}
        background={"#F7F6C5"}
        mt={2}
        p={2}
        gap={2}
      >
        <Flex
          w={"30%"}
          h={"100%"}
          minH={"calc(82vh - 4px)"}
          rounded={"lg"}
          justify={"flex-start"}
          direction={"column"}
          background={"#D0D5AF"}
          gap={2}
          p={2}
        >
          <Heading mb={-2} mt={3} ml={2} fontSize={"24"}>
            Programnapok
          </Heading>
          <Text ml={2} mb={2} fontSize={"16"} textColor={"gray.600"}>
            Kattints a programnapokra, hogy megtudd, melyik iskolában mi lesz!
          </Text>
          <Card w={"100%"} onClick={() => setSelectedDay(0)}>
            <CardHeader>
              <Heading fontSize={"20"}>Szerda (05.24.) - Apáczai</Heading>
            </CardHeader>
            <CardBody>
              <Text>Vegyél részt az Apisok programján!</Text>
            </CardBody>
          </Card>
          <Card w={"100%"} onClick={() => setSelectedDay(1)}>
            <CardHeader>
              <Heading fontSize={"20"}>Csütörtök (05.25.) - VPG</Heading>
            </CardHeader>
            <CardBody>
              <Text>Vegyél részt az Apisok programján!</Text>
            </CardBody>
          </Card>
          <Card w={"100%"} onClick={() => setSelectedDay(2)}>
            <CardHeader>
              <Heading fontSize={"20"}>Péntek (05.26.) - Eötvös</Heading>
            </CardHeader>
            <CardBody>
              <Text>Vegyél részt az Apisok programján!</Text>
            </CardBody>
          </Card>
        </Flex>
        <Flex
          w={"70%"}
          h={"100%"}
          minH={"calc(82vh - 4px)"}
          rounded={"lg"}
          justify={"flex-start"}
          direction={"column"}
          background={"#D0D5AF"}
          gap={2}
          p={2}
        >
          {selectedDay === 0 && (
            <>
              <Heading mb={-2} mt={3} ml={2} fontSize={"24"}>
                Szerda (05.24.) - Apáczai
              </Heading>
              <Text ml={2} mb={2} fontSize={"16"} textColor={"gray.600"}>
                Ide jön a szöveg
              </Text>
            </>
          )}
          {selectedDay === 1 && (
            <>
              <Heading mb={-2} mt={3} ml={2} fontSize={"24"}>
                Csütörtök (05.25.) - VPG
              </Heading>
              <Text ml={2} mb={2} fontSize={"16"} textColor={"gray.600"}>
                Ide jön a szöveg
              </Text>
            </>
          )}
          {selectedDay === 2 && (
            <>
              <Heading mb={-2} mt={3} ml={2} fontSize={"24"}>
                Péntek (05.26.) - Eötvös
              </Heading>
              <Text ml={2} mb={2} fontSize={"16"} textColor={"gray.600"}>
                Ide jön a szöveg
              </Text>
            </>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
}
