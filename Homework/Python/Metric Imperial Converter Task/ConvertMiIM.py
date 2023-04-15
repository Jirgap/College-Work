class ConverterMiIm:
    # TODO: Make code more readable
    def __init__(self, mi_or_im:str, convert_type:str, convert_value: float, conversion_values: dict):
        try:
            self.convert_value = float(convert_value)
            self.conversion_values = dict(conversion_values)
        except ValueError:
            print("Invalid values were passed, please ensure to pass through float for the value to be converted and dictionary for conversion values!")
            return None

        match mi_or_im:
            case "im":
                self.convert_im(convert_type)
            case "mi":
                self.convert_mi(convert_type)
            case _:
                print("Did not get proper input, you should of either select mi (metric) or im (imperial)!")

    def convert_im(self, convert_type: str):
        match convert_type:
            case "inch":
                self.new_value = self.convert_value * self.conversion_values["mm_inch"]
                self.print_results(self.convert_value, "mm", self.new_value, convert_type)
                self.the_value()
            case "mile":
                self.new_value = self.convert_value * self.conversion_values["km_mile"]
                self.print_results(self.convert_value, "km", self.new_value, convert_type)
                self.the_value()
            case "foot":
                self.new_value = self.convert_value * self.conversion_values["meter_foot"]
                self.print_results(self.convert_value, "meters", self.new_value, convert_type)
                self.the_value()
            case "square_foot":
                self.new_value = self.convert_value * self.conversion_values["square_meter_square_foot"]
                self.print_results(self.convert_value, "square meters", self.new_value, convert_type.replace("_", " "))
                self.the_value()
            case "cubic_foot":
                self.new_value = self.convert_value * self.conversion_values["cubic_meter_cubic_foot"]
                self.print_results(self.convert_value, "cubic meters", self.new_value, convert_type.replace("_", " "))
                self.the_value()
            case "gallon":
                self.new_value = self.convert_value * self.conversion_values["litre_gallon"]
                self.print_results(self.convert_value, "litres", self.new_value, convert_type)
                self.the_value()
            case "acre":
                self.new_value = self.convert_value * self.conversion_values["hectare_acre"]
                self.print_results(self.convert_value, "acre", self.new_value, convert_type)
                self.the_value()
            case _:
                print("Unknown type of value to convert")
                return None

    def convert_mi(self, convert_type: str):
        match convert_type:
            case "mm":
                self.new_value = self.convert_value / self.conversion_values["mm_inch"]
                self.print_results(self.convert_value, "inchs", self.new_value, convert_type)
                self.the_value()
            case "km":
                self.new_value = self.convert_value / self.conversion_values["km_mile"]
                self.print_results(self.convert_value, "miles", self.new_value, convert_type)
                self.the_value()
            case "meter":
                self.new_value = self.convert_value / self.conversion_values["meter_foot"]
                self.print_results(self.convert_value, "foot", self.new_value, convert_type)
                self.the_value()
            case "square_meter":
                self.new_value = self.convert_value / self.conversion_values["square_meter_square_foot"]
                self.print_results(self.convert_value, "square foot", self.new_value, convert_type.replace("_", " "))
                self.the_value()
            case "cubic_meter":
                self.new_value = self.convert_value / self.conversion_values["cubic_meter_cubic_foot"]
                self.print_results(self.convert_value, "cubic foot", self.new_value, convert_type.replace("_", " "))
                self.the_value()
            case "litre":
                self.new_value = self.convert_value / self.conversion_values["litre_gallon"]
                self.print_results(self.convert_value, "gallons", self.new_value, convert_type)
                self.the_value()
            case "hectare":
                self.new_value = self.convert_value / self.conversion_values["hectare_acre"]
                self.print_results(self.convert_value, "acre", self.new_value, convert_type)
                self.the_value()
            case _:
                print("Unknown type of value to convert")
                return None

    def the_value(self):
        return self.new_value

    def print_results(self, orginal_value, orginal_type, new_value, convert_type):
        print(f"Converted {orginal_value} {orginal_type} to {new_value} {convert_type}")
