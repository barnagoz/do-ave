import { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  Spacer,
  Text,
  ModalHeader,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  Avatar,
  AlertDescription,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [selectedDay, setSelectedDay] = useState(0);
  const [showModal, setShowModal] = useState(false);

  function closeModal() {
    setShowModal(false);
    localStorage.setItem("doNotShow", true);
  }

  useEffect(() => {
    const doNotShow = localStorage.getItem("doNotShow");
    if (doNotShow) {
      return;
    } else {
      setShowModal(true);
    }
  }, []);

  return (
    <>
      <Modal
        isOpen={showModal}
        onClose={() => {
          closeModal();
        }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>AVE Napok 2023</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              Örömmel jelentjük be, hogy idén is megrendezésre kerül az
              AVE-napok az Apáczai, a Veres Pálné és az Eötvös gimnáziumok
              szervezésében május 24-26 között. A 3 helyszínen különböző
              programokkal várunk benneteket! Részt vehettek quiz show-n,
              streetball mérkőzésen, jósláson és betérhettek a casinoba vagy a
              kocsmába! További részletek a napoknál olvashatók!
              <br />
              <br />
              Sok szeretettel várunk Titeket a 2023-as AVE-napokon!
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="yellow"
              onClick={() => {
                closeModal();
              }}
            >
              Rendben
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
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
          <Image
            src={"/api.hatternelkul.PNG"}
            width={100}
            height={100}
            alt="Apáczai logó"
          />
          <Image
            src={"/IMG_3779.PNG"}
            width={100}
            height={100}
            alt="Veres Pálné logó"
            style={{ marginLeft: "-10px" }}
          />
          <Image
            src={"/ejg.fekete.hatternelkul.PNG"}
            style={{ marginRight: 10 }}
            width={100}
            alt="Eötvös logó"
            height={100}
          />
        </Flex>
        <Box w="95%" p={2}>
          <Alert w="100%" status="info" variant="subtle" rounded={"lg"}>
            <AlertIcon />
            <AlertTitle mr={2}>
              A részvételhez előzetes jelentkezés szükséges!
            </AlertTitle>
            <AlertDescription>
              <Button>Jelentkezem</Button>
            </AlertDescription>
          </Alert>
        </Box>
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
            <Card
              w={"100%"}
              onClick={() => setSelectedDay(0)}
              cursor={"pointer"}
            >
              <CardHeader>
                <Flex direction={"row"} align={"center"}>
                  <Avatar src={"/IMG_3779.PNG"} size={"sm"} mr={2} />
                  <Heading fontSize={"20"}>Szerda (05.24.) - VPG</Heading>
                </Flex>
              </CardHeader>
              <CardBody pt={0}>
                <Text>Buzidítószöveg, hogy miért ide kattints először</Text>
              </CardBody>
            </Card>
            <Card
              w={"100%"}
              onClick={() => setSelectedDay(1)}
              cursor={"pointer"}
            >
              <CardHeader>
                <Flex direction={"row"} align={"center"}>
                  <Avatar
                    src={"/ejg.fekete.hatternelkul.PNG"}
                    size={"sm"}
                    mr={2}
                  />
                  <Heading fontSize={"20"}>Csütörtök (05.25.) - Eötvös</Heading>
                </Flex>
              </CardHeader>
              <CardBody pt={0}>
                <Text>Buzidítószöveg, hogy miért ide kattints először</Text>
              </CardBody>
            </Card>
            <Card
              w={"100%"}
              onClick={() => setSelectedDay(2)}
              cursor={"pointer"}
            >
              <CardHeader>
                <Flex direction={"row"} align={"center"}>
                  <Avatar src={"/api.hatternelkul.PNG"} size={"sm"} mr={2} />
                  <Heading fontSize={"20"}>Péntek (05.26.) - Apáczai</Heading>
                </Flex>
              </CardHeader>
              <CardBody pt={0}>
                <Text>
                  Buzidítószöveg, hogy miért ide kattints először: MERT EJG!
                </Text>
              </CardBody>
            </Card>
          </Flex>
          <Flex
            w={"70%"}
            h={"calc(80vh - 4px)"}
            minH={"calc(80vh - 4px)"}
            maxH={"calc(80vh - 4px)"}
            overflow={"scroll"}
            rounded={"lg"}
            justify={"flex-start"}
            direction={"column"}
            background={"#F7F6C5"}
            gap={4}
            p={2}
          >
            {selectedDay === 0 && (
              <>
                <Heading mt={3} ml={2} fontSize={"24"}>
                  Szerda (05.24.) - VPG
                </Heading>
                <Card rounded="lg" size="sm" w={"100%"}>
                  <CardHeader>
                    <Heading fontSize={"22"}>Kvízshow</Heading>
                  </CardHeader>
                  <CardBody pt={0}>
                    <Text>
                      <b>Időpont</b>: 15:45-17:00
                    </Text>
                    <Text>
                      <b>Helyszín</b>: aula
                    </Text>
                  </CardBody>
                  <CardFooter>
                    <Box w={"100%"}>
                      <Alert
                        w="100%"
                        status="warning"
                        variant="subtle"
                        rounded={"md"}
                        mb={1}
                      >
                        <AlertIcon />
                        <AlertTitle mr={2}>
                          A kvízshown való részvételhez jelentkezés szükséges!
                        </AlertTitle>
                      </Alert>
                      <Link
                        href={
                          "https://forms.office.com/pages/responsepage.aspx?id=32oi4RmZYEabUvmJndFcECupqCAFjJhLg05L6wP2haNUOFMwM0ZGTlpIUkVSWUdPVkRRWkhNWDZTQy4u&fbclid=IwAR3EaGW6NID2GgyUwJ9DDvLwA8V0OqJTTpgtw0a_7u07X9VrzPbkcanfwTY"
                        }
                      >
                        <Button w="100%" colorScheme={"blue"}>
                          Jelentkezés
                        </Button>
                      </Link>
                    </Box>
                  </CardFooter>
                </Card>
                <Card rounded="lg" size="sm" w={"100%"}>
                  <CardHeader>
                    <Heading fontSize={"22"}>Jóslás</Heading>
                  </CardHeader>
                  <CardBody pt={0}>
                    <Text fontStyle="italic" p={4} pt={0}>
                      Jósoltass magadnak szerencsét a VPG aulájának egy félreeső
                      részében! Tarot kártya olvasás, számmisztika és
                      tenyérjóslás – tudd meg a jövőd!
                    </Text>
                    <Text>
                      <b>Időpont</b>: 15:45-17:30
                    </Text>
                    <Text>
                      <b>Helyszín</b>: aula
                    </Text>
                  </CardBody>
                </Card>
                <Card rounded="lg" size="sm" w={"100%"}>
                  <CardHeader>
                    <Heading fontSize={"22"}>Röplabda</Heading>
                  </CardHeader>
                  <CardBody pt={0}>
                    <Text fontStyle="italic" p={4} pt={0}>
                      A VPG külső udvarán játszhatsz a barátaiddal vagy akár más
                      iskola tanulóival is barátságos meccseket, melyek
                      időtartama 10-10 perc. A meccseket fújni, a pontokat
                      számolni fogják a VPG tanulói, a szórakozás garantált!
                    </Text>
                    <Text>
                      <b>Időpont</b>: 15:45-17:15
                    </Text>
                    <Text>
                      <b>Helyszín</b>: udvar
                    </Text>
                  </CardBody>
                </Card>
                <Card rounded="lg" size="sm" w={"100%"}>
                  <CardHeader>
                    <Heading fontSize={"22"}>Szabadulószoba</Heading>
                  </CardHeader>
                  <CardBody pt={0}>
                    <Text fontStyle="italic" p={4} pt={0}>
                      A VPG rajztermében csapatokban próbálhattok majd
                      szerencsét. Ha szeretsz csapatban dolgozni és nem ijedsz
                      meg a kihívásoktól, akkor ott a helyed. Ha nem fix
                      csapattal érkezel, az is teljesen rendben van.
                    </Text>
                    <Text>
                      <b>Időpont</b>: 15:45-17:00
                    </Text>
                    <Text>
                      <b>Helyszín</b>: rajzterem
                    </Text>
                  </CardBody>
                </Card>
                <Card rounded="lg" size="sm" w={"100%"}>
                  <CardHeader>
                    <Heading fontSize={"22"}>Ismerkedős játékok</Heading>
                  </CardHeader>
                  <CardBody pt={0}>
                    <Text fontStyle="italic" p={4} pt={0}>
                      A VPG-s program zárásaként lehetőséget adunk nektek, hogy
                      a többi programon szimpatikussá vált tanulókat közelebbről
                      is megismerhessétek különféle ismerkedős játékok
                      keretében.
                    </Text>
                    <Text>
                      <b>Időpont</b>: 17:05-17:30
                    </Text>
                    <Text>
                      <b>Helyszín</b>: aula
                    </Text>
                  </CardBody>
                </Card>
              </>
            )}
            {selectedDay === 1 && (
              <>
                <Heading mt={3} ml={2} fontSize={"24"}>
                  Csütörtök (05.25.) - Eötvös
                </Heading>
                <Card rounded="lg" size="sm" w={"100%"}>
                  <CardHeader>
                    <Heading fontSize={"22"}>Streetball</Heading>
                  </CardHeader>
                  <CardBody pt={0}>
                    <Text fontStyle="italic" p={4} pt={0}>
                      Az Eötvösben az iskolák csapatai össze mérhetik kosárlabda
                      tudásuk. A csapatok 3 főből állhatnak és lehetőség van 1
                      csere regisztrálására!
                    </Text>
                    <Text>
                      <b>Időpont</b>: 16:15-18:30
                    </Text>
                    <Text>
                      <b>Helyszín</b>: 3. emeleti tornacsarnok
                    </Text>
                  </CardBody>
                  <CardFooter>
                    <Box w={"100%"}>
                      <Alert
                        w="100%"
                        status="warning"
                        variant="subtle"
                        rounded={"md"}
                        mb={1}
                      >
                        <AlertIcon />
                        <AlertTitle mr={2}>
                          A streetballon való részvételhez jelentkezés
                          szükséges!
                        </AlertTitle>
                      </Alert>
                      <Link href={"https://forms.gle/a4rJ9bnrcNTKsj8GA"}>
                        <Button w="100%" colorScheme={"blue"}>
                          Jelentkezés
                        </Button>
                      </Link>
                    </Box>
                  </CardFooter>
                </Card>
                <Card rounded="lg" size="sm" w={"100%"}>
                  <CardHeader>
                    <Heading fontSize={"22"}>Társasjátékozás</Heading>
                  </CardHeader>
                  <CardBody pt={0}>
                    <Text fontStyle="italic" p={4} pt={0}>
                      A sportesemény mellett a résztvevőknek van lehetőségük
                      különféle társasjátékokban összemérni tudásuk. Gyertek el
                      és játszatok barátaitokkal!
                    </Text>
                    <Text>
                      <b>Időpont</b>: 16:15-18:30
                    </Text>
                    <Text>
                      <b>Helyszín</b>: 307-es terem
                    </Text>
                    <Text
                      fontStyle="italic"
                      textColor={"gray.600"}
                      fontSize={"12"}
                    >
                      Az Eötvös Társastár jóvoltából.
                    </Text>
                  </CardBody>
                </Card>
                <Card rounded="lg" size="sm" w={"100%"}>
                  <CardHeader>
                    <Heading fontSize={"22"}>Kocsma</Heading>
                  </CardHeader>
                  <CardBody pt={0}>
                    <Text fontStyle="italic" p={4} pt={0}>
                      Ha elfáradtál a szurkolásban, vagy csak egy kis
                      felfrissülésre vágysz gyere el a “kocsmába”! Üdítővel és
                      gofrival várunk mindenkit! Ne izgulj! A meccsekről sem
                      maradsz le, mivel élő közvetítésen nézheted az
                      esemenyeket!
                    </Text>
                    <Text>
                      <b>Időpont</b>: 16:15-18:30
                    </Text>
                    <Text>
                      <b>Helyszín</b>: 308-as terem
                    </Text>
                  </CardBody>
                </Card>
              </>
            )}
            {selectedDay === 2 && (
              <>
                <Heading mt={3} ml={2} fontSize={"24"}>
                  Péntek (05.26.) - Apáczai
                </Heading>
                <Card rounded="lg" size="sm" w={"100%"}>
                  <CardHeader>
                    <Heading fontSize={"22"}>Casino</Heading>
                  </CardHeader>
                  <CardBody pt={0}>
                    <Text fontStyle="italic" p={4} pt={0}>
                      Gyere el és játssz a szerencsével! A kaszinó ajtai nyitva
                      állnak ahol pókerrel, black jackkel, unoval illetve
                      különféle társasokkal várunk Titeket!
                    </Text>
                    <Text>
                      <b>Időpont</b>: 17:00-19:00
                    </Text>
                    <Text>
                      <b>Helyszín</b>: színházterem
                    </Text>
                  </CardBody>
                </Card>
              </>
            )}
          </Flex>
        </Flex>
        <Text fontSize={"12"} textColor={"gray.600"} mt={2}>
          Készítette: <b>Gőz Barnabás</b>, üzemelteti az{" "}
          <b>Eötvös József Gimnázium Diákönkormányzata</b>
        </Text>
      </Flex>
    </>
  );
}
