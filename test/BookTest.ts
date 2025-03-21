import {Book} from "src/Book";
import {GoodreadsBook} from "const/goodreads";
import {Book_id} from "const/goodreads";
import {Identifiers} from "const/goodreads";

const test_book_id : Book_id = {
	id: "sample_id"
}

const test_identifier: Identifiers = {
	$: test_book_id,
	num_pages: ["123"]
}

const test_book: GoodreadsBook = {
	author: "test_author",
	title: "test_title",
	link: "test_link",
	pubDate: "01/01/1970",
	isbn: "0123456789",
	user_rating: "5",
	average_rating: "3",
	user_read_at: "01/01/1970",
	user_date_added: "01/01/1970",
	book_published: "01/01/1970",
	identifiers: test_identifier,
	content: "test_content",
	contentSnippet: "test_content_snippet",
	guid: "test_guid",
	user_shelves: "test_shelf",
	image_url: "test_image_url",
}

describe('Empty title', () => {
  test('empty title should result in empty_string', () => {
    // Given
    test_book.title = ""
    // When
    const unit = new Book(null, test_book);
    // Then
    expect(unit.title).toBe("");
  });
});

describe('No special character title', () => {
  test('No special character title should result in title', () => {
    // Given
    test_book.title = "My wonderful book"
    // When
    const unit = new Book(null, test_book);
    // Then
    expect(unit.title).toBe("My wonderful book");
  });
});

describe('Title with \'?\' character', () => {
  test('Title with \'?\' character should have it replaced with empty char', () => {
    // Given
    test_book.title = "My wonderful book?"
    // When
    const unit = new Book(null, test_book);
    // Then
    expect(unit.title).toBe("My wonderful book");
  });
});

describe('Title with \'#\' character', () => {
  test('Title with \'#\' character should have it replaced with empty char', () => {
    // Given
    test_book.title = "My wonderful book#"
    // When
    const unit = new Book(null, test_book);
    // Then
    expect(unit.title).toBe("My wonderful book");
  });
});

describe('Title with \'&\' character', () => {
  test('Title with \'&\' character should have it replaced with empty char', () => {
    // Given
    test_book.title = "My wonderful book&"
    // When
    const unit = new Book(null, test_book);
    // Then
    expect(unit.title).toBe("My wonderful book");
  });
});

describe('Title with \'{\' character', () => {
  test('Title with \'{\' character should have it replaced with empty char', () => {
    // Given
    test_book.title = "My wonderful book{"
    // When
    const unit = new Book(null, test_book);
    // Then
    expect(unit.title).toBe("My wonderful book");
  });
});

describe('Title with \'}\' character', () => {
  test('Title with \'}\' character should have it replaced with empty char', () => {
    // Given
    test_book.title = "My wonderful book}"
    // When
    const unit = new Book(null, test_book);
    // Then
    expect(unit.title).toBe("My wonderful book");
  });
});

describe('Title with \'%\' character', () => {
  test('Title with \'%\' character should have it replaced with empty char', () => {
    // Given
    test_book.title = "My wonderful book%"
    // When
    const unit = new Book(null, test_book);
    // Then
    expect(unit.title).toBe("My wonderful book");
  });
});

describe('Title with \'<\' character', () => {
  test('Title with \'<\' character should have it replaced with empty char', () => {
    // Given
    test_book.title = "My wonderful book<"
    // When
    const unit = new Book(null, test_book);
    // Then
    expect(unit.title).toBe("My wonderful book");
  });
});

describe('Title with \'>\' character', () => {
  test('Title with \'>\' character should have it replaced with empty char', () => {
    // Given
    test_book.title = "My wonderful book>"
    // When
    const unit = new Book(null, test_book);
    // Then
    expect(unit.title).toBe("My wonderful book");
  });
});

describe('Title with \'$\' character', () => {
  test('Title with \'$\' character should have it replaced with empty char', () => {
    // Given
    test_book.title = "My wonderful book$"
    // When
    const unit = new Book(null, test_book);
    // Then
    expect(unit.title).toBe("My wonderful book");
  });
});

describe('Title with \'*\' character', () => {
  test('Title with \'*\' character should have it replaced with empty char', () => {
    // Given
    test_book.title = "My wonderful book*"
    // When
    const unit = new Book(null, test_book);
    // Then
    expect(unit.title).toBe("My wonderful book");
  });
});

describe('Title with \'|\' character', () => {
  test('Title with \'|\' character should have it replaced with empty char', () => {
    // Given
    test_book.title = "My wonderful book|"
    // When
    const unit = new Book(null, test_book);
    // Then
    expect(unit.title).toBe("My wonderful book");
  });
});

describe('Title with \'\\\' character', () => {
  test('Title with \'\\\' character should have it replaced with empty char', () => {
    // Given
    test_book.title = "My wonderful book\\"
    // When
    const unit = new Book(null, test_book);
    // Then
    expect(unit.title).toBe("My wonderful book");
  });
});

describe('Title with \'\/\' character', () => {
  test('Title with \'\/\' character should have it replaced with empty char', () => {
    // Given
    test_book.title = "My wonderful book\/"
    // When
    const unit = new Book(null, test_book);
    // Then
    expect(unit.title).toBe("My wonderful book");
  });
});

describe('Title with \':\' character', () => {
  test('Title with \':\' character should have it replaced with empty char', () => {
    // Given
    test_book.title = "My wonderful book:"
    // When
    const unit = new Book(null, test_book);
    // Then
    expect(unit.title).toBe("My wonderful book");
  });
});

describe('Title with \'\"\' character', () => {
  test('Title with \'\"\' character should have it replaced with empty char', () => {
    // Given
    test_book.title = "My wonderful book\""
    // When
    const unit = new Book(null, test_book);
    // Then
    expect(unit.title).toBe("My wonderful book");
  });
});