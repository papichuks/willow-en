import { Button, Flex, Image, Text } from "@chakra-ui/react";
import { toaster } from "evergreen-ui";
import brandLogo from "../../assets/icons/brand-logo.svg";
import { logoutIcon } from "../../assets/svgs/svg";
import { logoutAcct } from "../../firebase";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { useEnsName } from "wagmi";

const AuthNav = () => {
  const walletAddr = localStorage.getItem("wallet_addr");
  const navigate = useNavigate();
  const { data, isFetched } = useEnsName({
    address: walletAddr,
  });
  return (
    <Flex
      bg="brand.green"
      p="15px 80px"
      alignItems="center"
      justifyContent="space-between"
      fontSize="14px"
    >
      <Flex alignItems="center" color="brand.white">
        <a href="/home">
          <Image cursor="pointer" src={brandLogo} alt="brand-logo" />
        </a>
        <Flex alignItems="center" ml="120px">
          <a href="/experts">
            <Text
              mr="50px"
              style={{ transition: "all 0.8s ease" }}
              cursor="pointer"
              _hover={{ color: "brand.yellow" }}
            >
              View Experts
            </Text>
          </a>
          <Text
            mr="50px"
            style={{ transition: "all 0.8s ease" }}
            cursor="pointer"
            _hover={{ color: "brand.yellow" }}
            onClick={() => toaster.success("Coming soon", { id: "mess" })}
          >
            Market Place
          </Text>
          {/* <a href="/view-plants">
                <Text style={{ transition: "all 0.8s ease" }} cursor="pointer" _hover={{ color: "brand.yellow" }}>
                  My Profile
                </Text>
              </a> */}
        </Flex>
      </Flex>
      <Flex alignItems="center">
        <Text
          mr="50px"
          style={{ transition: "all 0.8s ease" }}
          cursor="pointer"
          _hover={{ color: "brand.yellow" }}
          color="brand.yellow"
        >
          Earnings: $0.000
        </Text>
        <Flex justifyContent="space-between" alignItems="center">
          <Flex borderRadius="8px" border="1px solid #FFFFFF" padding="8px" color="white" mr="20px">
            <Text>Ens Name:</Text>
            <Text ml="5px">{data || '-'}</Text>
          </Flex>
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              <Text fontWeight="medium" fontSize="14px">
                {walletAddr ? `${walletAddr?.substring(0, 10)}...` : 'Settings'}
              </Text>
            </MenuButton>
            <MenuList>
              <MenuItem onClick={() => { logoutAcct(); navigate('/') }}>
                <Flex
                  alignItems="center"
                  style={{ transition: "all 0.8s ease" }}
                  cursor="pointer"
                  ml="10px"
                >
                  {logoutIcon}
                  <Text
                    ml="10px"
                    color="dark"
                    style={{ transition: "all 0.8s ease" }}
                  >
                    Logout
                  </Text>
                </Flex>
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default AuthNav;
