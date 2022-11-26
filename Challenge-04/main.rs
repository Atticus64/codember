const MIN_RANGE: u16 = 11098;
const MAX_RANGE: u16 = 59999;

fn main() {
    let mut numbers: Vec<u16> = vec![];
    for i in MIN_RANGE..MAX_RANGE {
        numbers.push(i)
    }

    let posible_passwords: Vec<u16> = numbers
        .into_iter()
        .filter(|n| have_two_five(n))
        .filter(|n| is_incremental(n))
        .collect();

    println!("El numero de posibles contraseñas es {}", posible_passwords.len());
    println!("El indice  55 es: {}", posible_passwords[55]);
    println!("La respuesta es: {}@{}!!", posible_passwords.len(), posible_passwords[55]);
    println!("Si!!! eres rico! 💰🔑, Bueno tu amigo");
}

fn have_two_five(numero: &u16) -> bool {
    return numero.to_string().contains("55");
}

fn is_incremental(numero: &u16) -> bool {
    let string_number = &numero.to_string();
    let mut arr_nums: Vec<u8> = vec![];
    for n in string_number.chars() {
        let str_num = String::from(n);
        let num: u8 = str_num.parse().expect("Error to convert string to number");
        arr_nums.push(num);
    }

    let (n1, n2, n3, n4, n5) = if let [n1, n2, n3, n4, n5] = arr_nums[..] {
        (n1, n2, n3, n4, n5)
    } else {
        todo!()
    };

    return n1 <= n2 && n2 <= n3 && n3 <= n4 && n4 <= n5;
}
