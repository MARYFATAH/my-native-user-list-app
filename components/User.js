export function User({ user }) {
  return (
    <View style={styles.itemContainer}>
      <Image
        source={{ uri: user.picture.thumbnail }}
        style={styles.thumbnail}
      />
      <View style={styles.textContainer}>
        <Text style={styles.nameText}>
          Name: {user.name.first} {user.name.last}
        </Text>
        <Text style={styles.emailText}>Email: {user.email}</Text>
      </View>
    </View>
  );
}
