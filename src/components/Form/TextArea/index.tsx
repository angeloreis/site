import { forwardRef, ForwardRefRenderFunction } from 'react'
import { FormControl, FormErrorMessage, FormLabel, Textarea as TextAreaChakra, TextareaProps as ChakraTextAreaProps } from "@chakra-ui/react";
import { FieldError } from 'react-hook-form';

interface TextAreaInputProps extends ChakraTextAreaProps {
    name: string;
    label?: string;
    error?: FieldError    
}

const TextAreaBase: ForwardRefRenderFunction<HTMLTextAreaElement, TextAreaInputProps>
 = ({ name, label, error = null, ...rest }, ref ) => {

    return (
        <FormControl isInvalid={!!error}>
              { !!label && <FormLabel htmlFor={name} id={name.concat('-form-label')}>{label}</FormLabel> }
              <TextAreaChakra
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

export const Textarea = forwardRef(TextAreaBase)