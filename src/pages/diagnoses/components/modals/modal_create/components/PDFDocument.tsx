import React from "react";
import { Document, Page, Text, StyleSheet, Image, View } from "@react-pdf/renderer";
function PDFDocument() {
  const [onClose, setOnClose] = React.useState(false);
  const refModal = React.useRef<HTMLDivElement>(null);
  const styles = StyleSheet.create({
    page: {
      flexDirection: "row",
      backgroundColor: "#E4E4E4",
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1,
    },
    text: {
      fontSize: 12,
      marginBottom: 5,
    },
  });
  return (
    <Document>
      <Page size="LETTER" style={styles.page}>
        <Text style={styles.text}>Lorem Ipsum</Text>
        <Image src={"https://picsum.photos/200/200"} />
        <View style={styles.section}>
          <Text>Section #1</Text>
        </View>
        <View style={styles.section}>
          <Text>Section #2</Text>
        </View>
      </Page>
    </Document>
  );
}

export default PDFDocument;
