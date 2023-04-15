import os
from ConvertMiIm import ConverterMiIm


conversion_values = {"mm_inch": 0.0394, "km_mile": 0.6214, "meter_foot": 3.2809, "square_meter_square_foot": 10.7643, "cubic_meter_cubic_foot": 35.3145, "litre_gallon": 0.2200, "hectare_acre": 2.4711}

def menu():
    os.system("cls" if os.name == "nt" else "clear")
    
    print("""Welcome, what would you like to do?
1. Convert Metric
2. Convert Imperial
    """)

    mi_or_mi = input("What would you like to do? (mi for metric) (im for imperial) > ").lower()

    if mi_or_mi == "1" or mi_or_mi == "1.":
        mi_or_mi = "mi"
    elif mi_or_mi == "2" or mi_or_mi == "2.":
        mi_or_mi = "im"
    elif mi_or_mi != "mi" and mi_or_mi != "im":
        print("Invalid Option, must be mi or im!")
        raise SystemExit

    convert_options_im = {1: "inch", 2: "mile", 3: "foot", 4: "square_foot", 5: "cubic_foot", 6: "gallon", 7: "acre"}
    convert_options_mi = {1: "mm", 2: "km", 3: "meter", 4: "square_meter", 5: "cubic_meter", 6: "litre", 7: "hectare"}

    if mi_or_mi == "im":
        convert_options_mi_index = 0
        for i in convert_options_im.values():
            convert_options_mi_index+=1
            print(f"{convert_options_mi_index}. Convert {i} to {convert_options_mi[convert_options_mi_index]}")
    elif mi_or_mi == "mi":
        convert_options_im_index = 0
        for i in convert_options_mi.values():
            convert_options_im_index+=1
            print(f"{convert_options_im_index}. Convert {i} to {convert_options_im[convert_options_im_index]}")
        
    try:
        convert_type = int(input("What would you like to convert? > "))
    except ValueError:
        print("Invalid option was given! Please select either 1, 2, 3, 4, 5, 6, 7 for it to work.")
        menu()

    if mi_or_mi == "im":
        if convert_type in convert_options_im.keys():
            print(f"\nSelected {convert_options_mi[convert_type]} to {convert_options_im[convert_type]}")
            while True:
                try:
                    value_to_convert = float(input("What value would you like to convert? > "))
                    break
                except ValueError:
                    print("Invalid value was given")
                    continue
            next_value = ConverterMiIm(mi_or_mi, convert_options_im[convert_type], value_to_convert, conversion_values)
            next_value = float(next_value.the_value())
            convert_back = input("\nWould you like to convert it back? > ")
            if convert_back == "y":
                ConverterMiIm("mi", convert_options_mi[convert_type], next_value, conversion_values)
        else:
            print("Invalid value was given")
            menu()
    elif mi_or_mi == "mi":
        if convert_type in convert_options_mi.keys():
            print(f"\nSelected {convert_options_im[convert_type]} to {convert_options_mi[convert_type]}")
            while True:
                try:
                    value_to_convert = float(input("What value would you like to convert? > "))
                    break
                except ValueError:
                    print("Invalid value was given")
                    continue
            next_value = ConverterMiIm(mi_or_mi, convert_options_mi[convert_type], value_to_convert, conversion_values)
            next_value = float(next_value.the_value())
            convert_back = input("\nWould you like to convert it back? > ")
            if convert_back == "y":
                ConverterMiIm("im", convert_options_im[convert_type], next_value, conversion_values)
    else:
        print("How the??")
        raise SystemExit


if __name__ == "__main__":
    menu()
