import { Box, Heading, Button, Flex, Stack } from "@chakra-ui/react";

const bgImage = "https://c8.alamy.com/compes/m7fb4f/profesional-moto-fmx-rider-descansa-en-su-bicicleta-todo-terreno-arenoso-y-domina-el-terreno-sun-esta-creando-m7fb4f.jpg";
const miniBannerImage = "https://c8.alamy.com/compes/m7fb4f/profesional-moto-fmx-rider-descansa-en-su-bicicleta-todo-terreno-arenoso-y-domina-el-terreno-sun-esta-creando-m7fb4f.jpg.jpg" ;

const Header = () => {
    return(
        <Box
        h='50vh'
        color='white'
        w='180vh'
        bgImage={`url(${bgImage})`}
        bgRepeat='no-repeat'
        bgSize='cover'
        position='relative'
        m={'40'}
        >
            <Flex
            direction='column'
            alignItems='center'
            justify='center'
            h='100%'
            bg='rgb(0 0 0 / 50%)'
            p={['0 10%', null, '0 20%']}
            >
                <Heading variant='banner'>DOMINA EL TERRENO</Heading>
                <Stack direction={{base: 'column', sm: 'row'}} spacing='40px' mt='30px'>
                    <Button variant='outline'
                     size='lg'
                     >Ver detalles
                     </Button>
                    <Button variant='outline' 
                    size='lg'
                    >Ver Video
                    </Button>
                </Stack>
            </Flex>
            <br />
            <Box
            bgImage={`url(${miniBannerImage})`}
            bgRepeat='no-repeat'
            bgSize='cover'
            width='300px'
            height='90px'
            display='flex'
            flexDirection='column' alignItems='center'justifyContent='center'
            color='white'
            p='10px'>
                <Heading fontSize='16px' textAlign='center'>DOMINA EL TERRENO</Heading>
                <Stack direction='row' mt='10px'>
                    <Button variant='outline' size='sm'>Ver detalles</Button>
                    <Button variant='outline' size='sm'>Ver Video</Button>
                </Stack>
            </Box>
        </Box>
    );
};

export default Header;