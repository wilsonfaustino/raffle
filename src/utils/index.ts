const quotes = [
  "📈 Medindo o nível de capital estético do grupo",
  "🤌 Contando quantos empregos a Djênifer já arrumou",
  "👀 Verificando vagas pra junin / sandy no Linkedinho",
  "🚨 Aplicando pra 324345 vagas na Gupy",
  "☕ Fazendo um cafézin, aceita?",
  "🪲 Enumerando bugs em produção",
];

export function loadingAnimation() {
  const frames = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧'];
  let i = 0;

  return setInterval(() => {
      process.stdout.write('\r' + frames[i]);
      i = (i + 1) % frames.length;
  }, 100);
}

function randomNumberBetween(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomItemFromArray(array: string[][]): string[] {
  return array[Math.floor(Math.random() * array.length)];
}

function maskPhoneNumber(phoneNumber: string, maskCharacter = '*') {
  // Check if the input is a valid phone number (digits only)
  if (!/^\d+$/.test(phoneNumber)) {
      console.error("Invalid phone number format");
      return null;
  }

  const lastFourDigits = phoneNumber.slice(-4);
  const maskedString = maskCharacter.repeat(phoneNumber.length - 4) + lastFourDigits;

  return maskedString;
}

function formatData(data: string[]) {
  const [, name, phone, passphrase] = data;
  const maskedPhone = maskPhoneNumber(phone);

  return { name, phone: maskedPhone, passphrase };
}

export function displayQuotes(loader: Timer, data: string[][]) {
  const formattedData = formatData(getRandomItemFromArray(data));
  let index = 0;
  const quoteInterval = setInterval(() => {
      console.log("\n" + quotes[index]);
      index++;
      if (index === quotes.length) {
          clearInterval(quoteInterval);
          setTimeout(() => {
              clearInterval(loader);
              console.log("\n✨✨✨ Mágica completa! ✨✨✨\n");
              console.table(formattedData);
          }, randomNumberBetween(1800, 2500));
      }
  }, 1000);
}
