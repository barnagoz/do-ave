import { useState } from "react";
import { Inter } from "next/font/google";
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Spacer,
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
      backgroundImage={
        "url(data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ffa833' fill-opacity='0.4'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E)"
      }
      direction={"column"}
      align={"center"}
    >
      <Flex w="100%" h={"15vh"} p={2} align={"center"} gap={5}>
        <Heading fontSize="25" marginLeft={4}>
          AVE Napok 2023
        </Heading>
        <Spacer />
        <Image src={"/api.hatternelkul.PNG"} width={100} height={100} />
        <Image
          src={"/IMG_3779.PNG"}
          width={100}
          height={100}
          style={{ marginLeft: "-10px" }}
        />
        <Image
          src={"/ejg.fekete.hatternelkul.PNG"}
          style={{ marginRight: 10 }}
          width={100}
          height={100}
        />
      </Flex>
      <Flex
        w="95%"
        minH={"80vh"}
        rounded={"lg"}
        direction={"row"}
        p={2}
        gap={2}
      >
        <Flex
          w={"30%"}
          h={"100%"}
          minH={"calc(80vh - 4px)"}
          rounded={"lg"}
          justify={"flex-start"}
          direction={"column"}
          background={"#F3F1A5"}
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
              <Heading fontSize={"20"}>Szerda (05.24.) - VPG</Heading>
            </CardHeader>
            <CardBody>
              <Text>Buzidítószöveg, hogy miért ide kattints először</Text>
            </CardBody>
          </Card>
          <Card w={"100%"} onClick={() => setSelectedDay(1)}>
            <CardHeader>
              <Heading fontSize={"20"}>Csütörtök (05.25.) - Eötvös</Heading>
            </CardHeader>
            <CardBody>
              <Text>Buzidítószöveg, hogy miért ide kattints először</Text>
            </CardBody>
          </Card>
          <Card w={"100%"} onClick={() => setSelectedDay(2)}>
            <CardHeader>
              <Heading fontSize={"20"}>Péntek (05.26.) - Apáczai</Heading>
            </CardHeader>
            <CardBody>
              <Text>
                Buzidítószöveg, hogy miért ide kattints először: MERT EJG!
              </Text>
            </CardBody>
          </Card>
        </Flex>
        <Flex
          w={"70%"}
          h={"100%"}
          minH={"calc(80vh - 4px)"}
          rounded={"lg"}
          justify={"flex-start"}
          direction={"column"}
          background={"#F7F6C5"}
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
      <Text fontSize={"12"} textColor={"gray.600"} mt={2}>
        Készítette: <b>Gőz Barnabás</b>, üzemelteti az{" "}
        <b>Eötvös József Gimnázium Diákönkormányzata</b>
      </Text>
    </Flex>
  );
}
