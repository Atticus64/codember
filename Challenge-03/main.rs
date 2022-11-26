use minreq;

#[derive(Debug)]
struct ZEBRA {
  length: u32,
  color: String
}

fn main() {
    let url = "https://codember.dev/colors.txt";
    let response = match minreq::get(url).send() {
        Ok(res) => res,
        Err(e) => {
            println!("Error: {}", e);
            return;
        }
    };

    let arr_str = response.as_str().expect("Error in transform a to arr");
    let parsed_arr: Vec<&str> = arr_str
        .trim_matches(|c| c == '[' || c == ']')
        .split(',')
        .collect();


    let mut last_color: String = String::from("");
    let mut next_color: String = String::from(parsed_arr[0]);
    let mut zebra_lenght: u32 = 0;

    let mut largest_zebra = ZEBRA { length: 0, color: String::from("") };

    for color in parsed_arr.into_iter() {
      if color != next_color.to_string() || color == last_color {
        zebra_lenght = 1;
      } 

      // let clone = color.clone();
      
      zebra_lenght += 1;

      next_color = last_color;
      last_color = color.to_string();
      
      if zebra_lenght > largest_zebra.length {
        largest_zebra = ZEBRA {
          length: zebra_lenght,
          color: last_color.clone()
        };
      }
      
    }

    println!("La longitud de la zebra 🦓 mas larga es {} y el color es{}", largest_zebra.length, largest_zebra.color);
    println!("Feliz Navidad 🎅 🎄")

 }
