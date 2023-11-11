import { useFormik } from "formik";
import * as Yup from "yup";
import {
  FormErrorMessage,
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  Box,
  Container,
} from "@chakra-ui/react";
import { useBookingContext } from "../context/BookingContext";

export default function BookingForm(props) {
  const {
    availableTimes: { availableTimes },
  } = useBookingContext();

  const formik = useFormik({
    initialValues: {
      date: "",
      time: "",
      guests: 1,
      occasion: "birthday",
    },
    onSubmit: (values) => props.submitForm(),
    validationSchema: Yup.object({
      date: Yup.string().required("Required"),
      time: Yup.string().required("Required"),
      guests: Yup.number().max(10, "Must be under 10").required("Required"),
      occasion: Yup.string().required("Required"),
    }),
  });

  return (
    <Container maxW="2xl">
      <Box padding="4" color="black" maxW="md">
        <form onSubmit={formik.handleSubmit}>
          <div>
            <FormControl isInvalid={formik.touched.date && formik.errors.date}>
              <FormLabel htmlFor="Date">Select Date :</FormLabel>
              <Input
                id="date"
                name="date"
                type="date"
                {...formik.getFieldProps("date")}
              />
              <FormErrorMessage>{formik.errors.date}</FormErrorMessage>

              <FormLabel htmlFor="Time" mt={4}>
                Select Time :
              </FormLabel>
              <Select id="time" name="time" {...formik.getFieldProps("time")}>
                {availableTimes.map(({ title, value }) => (
                  <option key={value} value={value}>
                    {title}
                  </option>
                ))}
              </Select>
              <FormErrorMessage>{formik.errors.time}</FormErrorMessage>

              <FormLabel htmlFor="Guests" mt={4}>
                Guests numbers :
              </FormLabel>
              <Input
                id="guests"
                name="guests"
                type="number"
                min="1"
                max="10"
                {...formik.getFieldProps("guests")}
              />
              <FormErrorMessage>{formik.errors.guests}</FormErrorMessage>

              <FormLabel htmlFor="Occasion" mt={4}>
                Select Occasion :
              </FormLabel>
              <Select
                id="occasion"
                name="occasion"
                {...formik.getFieldProps("occasion")}
              >
                {availableTimes.map(({ value, title }) => (
                  <option key={value} value={value}>
                    {title}
                  </option>
                ))}
              </Select>
              <FormErrorMessage>{formik.errors.occasion}</FormErrorMessage>

              <Button mt={8} colorScheme="yellow" type="submit">
                Submit
              </Button>
            </FormControl>
          </div>
        </form>
      </Box>
    </Container>
  );
}
