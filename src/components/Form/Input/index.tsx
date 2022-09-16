import { forwardRef, ForwardRefRenderFunction } from 'react'
import { FormControl, FormErrorMessage, FormLabel, Input as InputChakra, InputProps as ChakraInputProps } from "@chakra-ui/react";
import { FieldError } from 'react-hook-form';

interface InputProps extends ChakraInputProps {
    name: string;
    label?: string;
    error?: FieldError    
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps>
 = ({ name, label, error = null, ...rest }, ref ) => {

    return (
        <FormControl isInvalid={!!error}>
              { !!label && <FormLabel htmlFor={name} id={name.concat('-form-label')}>{label}</FormLabel> }
              <InputChakra
                name={name}
                id={name}
                focusBorderColor='cyan.500'
                bgColor='blackAlpha.600'
                variant='filled'
                _hover={{
                  bgColor: 'blackAlpha.900'
                }}
                size='lg'
                ref={ref}  
                {...rest}            
                />

                {!!error && (
                  <FormErrorMessage>
                    {error.message}
                  </FormErrorMessage>
                )}
        </FormControl>
    );
}

export const Input = forwardRef(InputBase)