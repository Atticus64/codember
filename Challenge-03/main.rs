use minreq;

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
    let mut next_color: &str = parsed_arr[0];
    let mut max_lenght_zebra: u32 = 0;
    let mut last_zebra_color: String = String::from("");
    let mut zebra_lenght: u32 = 0;

    for color in parsed_arr.into_iter() {
      if color != next_color && color == last_color {
        zebra_lenght = 1;
      } 

      // let clone = color.clone();
      
      if color == next_color {
        zebra_lenght = 1;
      } else {
        zebra_lenght += 1;
      }

      
      // next_color = last_color.as_str();
      last_color = color.to_string();
      
      if zebra_lenght > max_lenght_zebra {
        max_lenght_zebra = zebra_lenght;
        last_zebra_color = last_color.clone();
      }
      
    }

    println!("{}", last_zebra_color);
    println!("{}", max_lenght_zebra);

 }
